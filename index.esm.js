import cambodianIpRanges from './cambodianIpRanges.cjs';

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomHostFromBase(base) {
  const parts = base.split('.');
  if (parts.length !== 4) return base;

  const [a, b, c, d] = parts;

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
  const base = cambodianIpRanges[Math.floor(Math.random() * cambodianIpRanges.length)];
  return randomHostFromBase(base);
}
/**
 * Generate multiple random Cambodian IP addresses
 * @param {number} count - Number of IP addresses to generate
 * @param {boolean} unique - Whether to ensure uniqueness (default: false)
 * @returns {string[]} Array of Cambodian IP
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
  return false;
}

const khmerIpGenerator = {
  generateKhmerIp,
  generateMultipleKhmerIps,
  getKhmerIpRangesCount,
  isKhmerIp,
  cambodianIpRanges,
  randomCambodianIp: generateKhmerIp,
  generateCambodianIp: generateKhmerIp
};
export {
  generateKhmerIp,
  generateMultipleKhmerIps,
  getKhmerIpRangesCount,
  isKhmerIp,
  cambodianIpRanges
};

export default khmerIpGenerator;
