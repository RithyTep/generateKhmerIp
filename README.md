# generateKhmerIp 🇰🇭

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
[![npm](https://img.shields.io/badge/npm-package-CB3837?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/generate-khmer-ip)

**Generate valid Cambodian IP addresses for testing, development, and research purposes.**

</div>

---

## Overview

`generateKhmerIp` is a utility library that generates IP addresses within Cambodia's allocated IP ranges. Perfect for:

- 🧪 Testing geo-location features
- 🔧 Development and staging environments
- 📊 Research and data analysis
- 🎭 Mock data generation

## Installation

```bash
npm install generate-khmer-ip
```

## Usage

### Basic Usage

```javascript
const { generateKhmerIp } = require('generate-khmer-ip');

// Generate a single Cambodian IP
const ip = generateKhmerIp();
console.log(ip); // e.g., "103.16.120.45"

// Generate multiple IPs
const ips = generateKhmerIp({ count: 5 });
console.log(ips);
// [
//   "103.16.120.45",
//   "202.62.16.123",
//   "103.197.207.89",
//   ...
// ]
```

### With Options

```javascript
const { generateKhmerIp } = require('generate-khmer-ip');

// Generate from specific ISP range
const ip = generateKhmerIp({
  isp: 'cellcard',  // 'cellcard', 'smart', 'metfone', 'ezecom', etc.
});

// Generate with metadata
const ipWithMeta = generateKhmerIp({
  includeMeta: true,
});
console.log(ipWithMeta);
// {
//   ip: "103.16.120.45",
//   isp: "Cellcard",
//   region: "Phnom Penh",
//   range: "103.16.120.0/24"
// }
```

### TypeScript Support

```typescript
import { generateKhmerIp, KhmerIpOptions, KhmerIpResult } from 'generate-khmer-ip';

const options: KhmerIpOptions = {
  count: 10,
  isp: 'smart',
  includeMeta: true,
};

const results: KhmerIpResult[] = generateKhmerIp(options);
```

## API Reference

### `generateKhmerIp(options?)`

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `count` | `number` | `1` | Number of IPs to generate |
| `isp` | `string` | `random` | Specific ISP range |
| `includeMeta` | `boolean` | `false` | Include metadata with IP |
| `unique` | `boolean` | `true` | Ensure unique IPs |

### Supported ISPs

| ISP | Code | IP Ranges |
|-----|------|-----------|
| Cellcard | `cellcard` | 103.16.x.x |
| Smart Axiata | `smart` | 202.62.x.x |
| Metfone | `metfone` | 103.197.x.x |
| EZECOM | `ezecom` | 103.9.x.x |
| SINET | `sinet` | 103.63.x.x |
| Online | `online` | 36.37.x.x |

## Cambodia IP Ranges

This library uses official APNIC-allocated IP ranges for Cambodia:

```
103.9.0.0/16      - Various ISPs
103.16.120.0/22   - Cellcard
103.63.0.0/17     - SINET
103.197.206.0/23  - Metfone
202.62.16.0/20    - Smart Axiata
36.37.128.0/17    - Online
...and more
```

## Use Cases

### Testing Geo-restrictions

```javascript
// Test if your geo-blocking works correctly
const cambodiaIp = generateKhmerIp();
const response = await fetch('/api/content', {
  headers: { 'X-Forwarded-For': cambodiaIp }
});
```

### Mock Data Generation

```javascript
// Generate test users with Cambodian IPs
const mockUsers = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  ip: generateKhmerIp(),
  country: 'KH',
}));
```

### Analytics Testing

```javascript
// Test analytics with Cambodian traffic
const testData = generateKhmerIp({
  count: 1000,
  includeMeta: true
});

testData.forEach(({ ip, isp, region }) => {
  analytics.track('page_view', { ip, isp, region });
});
```

## Contributing

Contributions are welcome! If you know of additional Cambodian IP ranges, please submit a PR.

```bash
git clone https://github.com/RithyTep/generateKhmerIp.git
cd generateKhmerIp
npm install
npm test
```

## Disclaimer

⚠️ This tool is for **legitimate testing and development purposes only**. Do not use generated IPs for:
- Bypassing security measures
- Fraudulent activities
- Any illegal purposes

## License

MIT License

---

<div align="center">

**Made in Cambodia 🇰🇭 by [Rithy Tep](https://github.com/RithyTep)**

</div>
