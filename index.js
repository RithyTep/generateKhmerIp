function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const cambodianIpRanges = require('./cambodianIpRanges.cjs');

/**
 * Given a network base like "103.5.124.0" or "34.103.0.0",
 * generate a random host IP within that network.
 * Heuristic used:
 * - If base ends with ".0.0" treat as /16 and randomize the 3rd and 4th octets
 * - Else if base ends with ".0" treat as /24 and randomize the 4th octet
 * - Otherwise return the base as-is
 */
function randomHostFromBase(base) {
  const parts = base.split('.');
  if (parts.length !== 4) return base;

  const a = parts[0];
  const b = parts[1];
  const c = parts[2];
  const d = parts[3];

  if (c === '0' && d === '0') {
    const rc = randInt(0, 255);
    const rd = randInt(1, 254);
    return `${a}.${b}.${rc}.${rd}`;
  }

  if (d === '0') {
    const rd = randInt(1, 254);
    return `${a}.${b}.${c}.${rd}`;
  }

  return base;
}

/**
 * Check whether an IP belongs to a base entry using the same heuristic
 * as randomHostFromBase. This makes isKhmerIp work for generated host
 * IPs (e.g. 103.5.124.23 should match base 103.5.124.0).
 */
function ipMatchesBase(ip, base) {
  const ipParts = ip.split('.');
  const baseParts = base.split('.');
  if (ipParts.length !== 4 || baseParts.length !== 4) return false;

  if (baseParts[2] === '0' && baseParts[3] === '0') {
    return ipParts[0] === baseParts[0] && ipParts[1] === baseParts[1];
  }

  if (baseParts[3] === '0') {
    return (
      ipParts[0] === baseParts[0] &&
      ipParts[1] === baseParts[1] &&
      ipParts[2] === baseParts[2]
    );
  }

  return ip === base;
}
/**
 * Generate a random Cambodian IP address from known IP ranges
 * @returns {string} A randomly selected Cambodian IP address
 */
function generateKhmerIp() {
  const randomIndex = Math.floor(Math.random() * cambodianIpRanges.length);
  const base = cambodianIpRanges[randomIndex];
  return randomHostFromBase(base);
}

/**
 * Generate multiple random Cambodian IP addresses
 * @param {number} count - Number of IP addresses to generate
 * @param {boolean} unique - Whether to ensure uniqueness (default: false)
 * @returns {string[]} Array of Cambodian IP addresses
 */
function generateMultipleKhmerIps(count = 1, unique = false) {
  if (count <= 0) return [];

  const ips = [];
  const used = new Set();

  const maxAttempts = Math.max(count * 5, 1000);

  let attempts = 0;
  while (ips.length < count && attempts < maxAttempts) {
    attempts++;
    const base = cambodianIpRanges[Math.floor(Math.random() * cambodianIpRanges.length)];
    const ip = randomHostFromBase(base);

    if (unique) {
      if (used.has(ip)) continue;
      used.add(ip);
    }

    ips.push(ip);
  }

  return ips;
}
/**
 * Get the total count of available Cambodian IP ranges
 * @returns {number} Total number of IP ranges available
 */
function getKhmerIpRangesCount() {
  return cambodianIpRanges.length;
}

/**
 * Check if an IP address is in the Cambodian IP ranges
 * @param {string} ip - IP address to check
 * @returns {boolean} True if the IP is in Cambodian ranges
 */
function isKhmerIp(ip) {
  for (let i = 0; i < cambodianIpRanges.length; i++) {
    if (ipMatchesBase(ip, cambodianIpRanges[i])) return true;
  }

  try {
    const ipParts = String(ip).split('.');
    if (ipParts.length === 4) {
      const prefix2 = `${ipParts[0]}.${ipParts[1]}`;
      for (let i = 0; i < cambodianIpRanges.length; i++) {
        const parts = cambodianIpRanges[i].split('.');
        if (parts.length === 4 && `${parts[0]}.${parts[1]}` === prefix2) return true;
      }
    }
  } catch (e) {
  }

  return false;
}

const https = require('https');

function isKhmerIpRemote(ip, options = {}) {
  const serviceBase = options.serviceBase || 'https://ip-api.com/json/';
  const timeout = typeof options.timeout === 'number' ? options.timeout : 5000;
  const fallbackToLocal = !!options.fallbackToLocal;

  return new Promise((resolve, reject) => {
    const url = `${serviceBase}${encodeURIComponent(ip)}?fields=status,countryCode,message`;
    const req = https.get(url, { timeout }, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          const data = JSON.parse(body);
          if (data && data.status === 'success' && data.countryCode === 'KH') {
            resolve(true);
          } else if (fallbackToLocal) {
            try {
              resolve(isKhmerIp(ip));
            } catch (err) {
              reject(err);
            }
          } else {
            resolve(false);
          }
        } catch (err) {
          if (fallbackToLocal) {
            try {
              resolve(isKhmerIp(ip));
            } catch (e) {
              reject(e);
            }
          } else {
            reject(err);
          }
        }
      });
    });

    req.on('error', (err) => {
      if (fallbackToLocal) {
        try {
          resolve(isKhmerIp(ip));
        } catch (e) {
          reject(e);
        }
      } else {
        reject(err);
      }
    });
    req.on('timeout', () => {
      req.destroy();
      if (fallbackToLocal) {
        try {
          resolve(isKhmerIp(ip));
        } catch (e) {
          reject(e);
        }
      } else {
        reject(new Error('Request timed out'));
      }
    });
  });
}

const khmerIpGenerator = {
  generateKhmerIp,
  generateMultipleKhmerIps,
  getKhmerIpRangesCount,
  isKhmerIp,
  isKhmerIpRemote,
};

module.exports = khmerIpGenerator;
module.exports.default = khmerIpGenerator;
module.exports.generateKhmerIp = generateKhmerIp;
module.exports.generateMultipleKhmerIps = generateMultipleKhmerIps;
module.exports.getKhmerIpRangesCount = getKhmerIpRangesCount;
module.exports.isKhmerIp = isKhmerIp;
module.exports.isKhmerIpRemote = isKhmerIpRemote;
