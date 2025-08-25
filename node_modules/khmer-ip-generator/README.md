
# Khmer IP Generator

A lightweight JavaScript library for generating random Cambodian (Khmer) IP addresses from known IP ranges.

## Installation

```bash
npm install khmer-ip-generator
```

## Usage

### CommonJS
```javascript
const { generateKhmerIp, generateMultipleKhmerIps } = require('khmer-ip-generator');

// Generate a single random Cambodian IP
const ip = generateKhmerIp();
console.log(ip); // e.g., "103.5.124.0"

// Generate multiple IPs
const ips = generateMultipleKhmerIps(5);
console.log(ips); // Array of 5 random Cambodian IPs
```

### ES Modules
```javascript
import { generateKhmerIp, generateMultipleKhmerIps } from 'khmer-ip-generator';

const ip = generateKhmerIp();
const ips = generateMultipleKhmerIps(3, true); // 3 unique IPs
```

## API

### `generateKhmerIp()`
Returns a single random Cambodian IP address.

### `generateMultipleKhmerIps(count, unique)`
- `count` (number): Number of IPs to generate (default: 1)
- `unique` (boolean): Whether to ensure uniqueness (default: false)

### `getAllKhmerIpRanges()`
Returns all available Cambodian IP ranges as an array.

### `getKhmerIpRangesCount()`
Returns the total number of available IP ranges.

### `isKhmerIp(ip)`
Checks if the given IP address is in the Cambodian IP ranges.

## License
License by Rithy Tep
MIT
