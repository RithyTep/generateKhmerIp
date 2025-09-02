# Khmer IP Generator

![Khmer IP Generator](https://en.ipshu.com/country-picture/KH.png)

A lightweight, dependency-free JavaScript library for generating random Cambodian (Khmer) IP addresses from verified IP ranges. Ideal for testing geo-based features, localization systems, analytics platforms, and security applications.

[![npm version](https://img.shields.io/npm/v/khmer-ip-generator.svg)](https://www.npmjs.com/package/khmer-ip-generator)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/rithytep/generateKhmerIp)](https://github.com/rithytep/generateKhmerIp/issues)
[![Build Status](https://img.shields.io/github/actions/workflow/status/rithytep/generateKhmerIp/ci.yml)](https://github.com/rithytep/generateKhmerIp/actions)

**Version**: 2.0.5
**Maintainer**: Rithy Tep ([YouTube](https://www.youtube.com/@rithy500) | [Facebook](http://fb.com/rithy500))
**Last Updated**: May 2025

## Features

- **Lightweight**: No runtime dependencies, minimal bundle size.
- **Accurate**: Uses verified Cambodian IP ranges from APNIC and other registries.
- **Versatile**: Supports Node.js, React, Vue, Angular, Svelte, Next.js, Nuxt.js, and more.
- **TypeScript Ready**: Includes built-in type definitions.

---

## Installation

Install via npm:

```bash
npm install khmer-ip-generator
```

Or with Yarn:

```bash
yarn add khmer-ip-generator
```

---

## Quick Start

### Generate a Single IP

```javascript
import { generateKhmerIp } from 'khmer-ip-generator';

const ip = generateKhmerIp();
console.log(ip); // Example: "103.111.197.24"
```

### Generate Multiple IPs

```javascript
import { generateMultipleKhmerIps } from 'khmer-ip-generator';

const ips = generateMultipleKhmerIps(5); // 5 random IPs
const uniqueIps = generateMultipleKhmerIps(5, true); // 5 unique IPs
console.log(ips); // Example: ["34.98.224.91", "154.217.71.43", ...]
```

---

## API Reference

| Function                     | Description                                              | Parameters                              | Returns       |
|------------------------------|----------------------------------------------------------|-----------------------------------------|---------------|
| `generateKhmerIp()`          | Generates a random Cambodian IP address.                  | None                                    | `string`      |
| `generateMultipleKhmerIps(count, unique?)` | Generates multiple random IPs.              | `count: number`, `unique?: boolean`     | `string[]`    |
| `isKhmerIp(ip)`              | Validates if an IP belongs to a Cambodian range.          | `ip: string`                            | `boolean`     |
| `getKhmerIpRangesCount()`    | Returns the count of Cambodian IP ranges.                 | None                                    | `number`      |

**Example**:

```javascript
import { isKhmerIp } from 'khmer-ip-generator';

console.log(isKhmerIp("103.111.197.24")); // true or false
```

---

## Framework Integrations

### Node.js (CommonJS)

```javascript
const { generateKhmerIp } = require('khmer-ip-generator');
console.log(generateKhmerIp()); // "103.206.68.78"
```

### React (Hooks)

```jsx
import React, { useState } from 'react';
import { generateKhmerIp } from 'khmer-ip-generator';

function IpGenerator() {
  const [ip, setIp] = useState(generateKhmerIp());

  return (
    <div>
      <button onClick={() => setIp(generateKhmerIp())}>New IP</button>
      <p>IP: {ip}</p>
    </div>
  );
}
export default IpGenerator;
```

### Vue 3 (Composition API)

```vue
<template>
  <div>
    <button @click="generateIp">Generate IP</button>
    <p>IP: {{ ip }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { generateKhmerIp } from 'khmer-ip-generator';

const ip = ref(generateKhmerIp());
const generateIp = () => {
  ip.value = generateKhmerIp();
};
</script>
```

### Angular (Service)

```typescript
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { generateKhmerIp } from 'khmer-ip-generator';

@Injectable({ providedIn: 'root' })
export class KhmerIpService {
  generateIp(): Observable<string> {
    return of(generateKhmerIp());
  }
}
```

### Svelte

```svelte
<script>
  import { generateKhmerIp } from 'khmer-ip-generator';
  let ip = generateKhmerIp();

  function generateIp() {
    ip = generateKhmerIp();
  }
</script>

<div>
  <button on:click={generateIp}>Generate IP</button>
  <p>IP: {ip}</p>
</div>
```

### Next.js (API Route)

```javascript
// pages/api/ip.js
import { generateKhmerIp } from 'khmer-ip-generator';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ ip: generateKhmerIp() });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
```

---

## Use Cases

- **Quality Assurance**: Test geographic restrictions, location-based authentication, and regional content delivery.
- **Analytics**: Simulate regional traffic, analyze geographic data, or conduct market research.
- **Security**: Simulate IP whitelists, test access controls, or assess network security.
- **Localization**: Validate Cambodia-specific features or personalize regional content.

---

## Technical Details

### Data Source
IP ranges are sourced from [APNIC](https://www.apnic.net/) and other regional internet registries, ensuring accuracy and compliance.

### Performance
- **Zero Dependencies**: Minimal bundle size.
- **Fast Generation**: Optimized random IP generation.
- **Memory Efficient**: Lazy-loaded data structures.
- **Thread-Safe**: Suitable for multi-threaded environments.

### Compatibility

| Framework/Environment | Support | TypeScript | SSR |
|-----------------------|---------|------------|-----|
| Node.js               | ✅       | ✅          | ✅   |
| React                 | ✅       | ✅          | ✅   |
| Vue.js                | ✅       | ✅          | ✅   |
| Angular               | ✅       | ✅          | ✅   |
| Svelte                | ✅       | ✅          | ✅   |
| Next.js               | ✅       | ✅          | ✅   |
| Nuxt.js               | ✅       | ✅          | ✅   |

---

## FAQs

### Why use Khmer IP Generator?
It provides accurate Cambodian IP addresses for testing geo-specific features without relying on external APIs, ensuring privacy and performance.

### How are IP ranges verified?
Ranges are sourced from APNIC and cross-checked with other registries for accuracy.

### Can I use this in production?
This library is designed for testing and development. For production, ensure compliance with local regulations.

### What if I need unique IPs?
Use `generateMultipleKhmerIps(count, true)` to ensure unique IP addresses.

---

## Troubleshooting

- **Invalid IP Generated?**
  - Ensure you're using the latest version (`2.0.0`).
  - Verify the IP with `isKhmerIp(ip)` to confirm it’s in a Cambodian range.
- **Performance Issues?**
  - The library is lightweight, but generating large numbers of unique IPs (e.g., >10,000) may be slower due to uniqueness checks.
- **Framework Errors?**
  - Check for correct imports (ES Modules vs. CommonJS).
  - Ensure TypeScript is configured if using types.

File issues at [GitHub Issues](https://github.com/rithytep/generateKhmerIp/issues).

---

## Contributing

We welcome contributions! Follow these steps:

1. Fork the repository: [github.com/rithytep/generateKhmerIp](https://github.com/rithytep/generateKhmerIp)
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Write tests for new functionality.
4. Follow the existing code style (use ESLint/Prettier).
5. Update documentation for API changes.
6. Submit a pull request with a clear description.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## License

[MIT License](LICENSE) - Free for personal and commercial use.

---

## Support

For bugs, feature requests, or questions, visit our [GitHub Issues](https://github.com/rithytep/generateKhmerIp/issues) page or contact the maintainer:

- **Maintainer**: Rithy Tep
- **YouTube**: [youtube.com/@rithy500](https://www.youtube.com/@rithy500)
- **Facebook**: [fb.com/rithy500](http://fb.com/rithy500)

---

**Version**: 2.0.5
**Repository**: [github.com/rithytep/generateKhmerIp](https://github.com/rithytep/generateKhmerIp)

---
