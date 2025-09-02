
/**
 * Generate a random Cambodian IP address from known IP ranges
 */
export declare function generateKhmerIp(): string;

/**
 * Generate multiple random Cambodian IP addresses
 */
export declare function generateMultipleKhmerIps(count?: number, unique?: boolean): string[];

/**
 * Get the total count of available Cambodian IP ranges
 */
export declare function getKhmerIpRangesCount(): number;

/**
 * Check if an IP address is in the Cambodian IP ranges
 */
export declare function isKhmerIp(ip: string): boolean;

interface KhmerIpGenerator {
  generateKhmerIp(): string;
  generateMultipleKhmerIps(count?: number, unique?: boolean): string[];
  getKhmerIpRangesCount(): number;
  isKhmerIp(ip: string): boolean;
}

declare const khmerIpGenerator: KhmerIpGenerator;
export default khmerIpGenerator;
