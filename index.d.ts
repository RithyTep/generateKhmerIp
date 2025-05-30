export declare function generateKhmerIp(): string;

/**
 * Generate multiple random Cambodian IP addresses
 */
export declare function generateMultipleKhmerIps(count?: number, unique?: boolean): string[];

/**
 * Get all available Cambodian IP ranges
 */
export declare function getAllKhmerIpRanges(): string[];

/**
 * Get the total count of available Cambodian IP ranges
 */
export declare function getKhmerIpRangesCount(): number;

/**
 * Check if an IP address is in the Cambodian IP ranges
 */
export declare function isKhmerIp(ip: string): boolean;

export declare const randomCambodianIp: typeof generateKhmerIp;
export declare const generateCambodianIp: typeof generateKhmerIp;
