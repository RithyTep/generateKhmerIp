import cambodianIpRanges from './cambodianIpRanges.cjs';

/**
 * Generate a random Cambodian IP address from known IP ranges
 * @returns {string} A randomly selected Cambodian IP address
 */
function generateKhmerIp() {
  const randomIndex = Math.floor(Math.random() * cambodianIpRanges.length);
  return cambodianIpRanges[randomIndex];
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
  const usedIndices = new Set();

  for (let i = 0; i < count; i++) {
    if (unique && usedIndices.size >= cambodianIpRanges.length) {
      break;
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cambodianIpRanges.length);
    } while (unique && usedIndices.has(randomIndex));

    usedIndices.add(randomIndex);
    ips.push(cambodianIpRanges[randomIndex]);
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
  return cambodianIpRanges.includes(ip);
}

const khmerIpGenerator = {
  generateKhmerIp,
  generateMultipleKhmerIps,
  getKhmerIpRangesCount,
  isKhmerIp,
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

export { generateKhmerIp as randomCambodianIp, generateKhmerIp as generateCambodianIp };

export default khmerIpGenerator;
