https://en.ipshu.com/picture/175.100.53.png
# Khmer IP Generator

A small, dependency-free JavaScript library for generating random IP addresses allocated to Cambodia. It is intended for testing and simulation tasks such as geo-based feature testing, analytics, and access control validation.

--

## Installation

Install from npm:

```bash
npm install khmer-ip-generator
```

--

## Quick start

Generate a single IP address:

```js
import { generateKhmerIp } from 'khmer-ip-generator';

const ip = generateKhmerIp();
console.log(ip); // e.g., "103.111.197.24"
```

Generate multiple IP addresses:

```js
import { generateMultipleKhmerIps } from 'khmer-ip-generator';

const ips = generateMultipleKhmerIps(5);        // 5 random IPs
const uniqueIps = generateMultipleKhmerIps(5, true); // 5 unique IPs
```

--

## API reference

generateKhmerIp()
: Returns a single random IP address drawn from the library's Cambodia IP ranges.

generateMultipleKhmerIps(count, unique = false)
: Generates multiple IP addresses.

- count: Number of IPs to generate.
- unique (optional): When true, ensures all generated IPs are unique (if possible).

getAllKhmerIpRanges()
: Returns an array of known IP ranges assigned to Cambodia.

getKhmerIpRangesCount()
: Returns the number of IP ranges in the dataset.

isKhmerIp(ip)
: Returns true if the provided IP address falls within one of the Cambodia IP ranges.

Example:

```js
isKhmerIp('103.111.197.24'); // true or false
```

--

## Usage examples

CommonJS (Node.js):

```js
const khmerIp = require('khmer-ip-generator');

console.log(khmerIp.generateKhmerIp());
console.log(khmerIp.generateMultipleKhmerIps(3));
```

ES Modules:

```js
import { generateKhmerIp, isKhmerIp } from 'khmer-ip-generator';

const ip = generateKhmerIp();
console.log(isKhmerIp(ip));
```

Vue 3 (Composition API) example:

```vue
<template>
  <div>
    <button @click="generateNewIp">Generate new IP</button>
    <p>{{ currentIp }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { generateKhmerIp } from 'khmer-ip-generator';

const currentIp = ref(generateKhmerIp());

const generateNewIp = () => {
  currentIp.value = generateKhmerIp();
};
</script>
```

--

## Use cases

- QA testing for geo-restricted or localized behavior
- Analytics and regional simulations
- IP whitelisting or access-control testing
- Development of Cambodia-targeted features

--

## Environment support

The package works in modern JavaScript environments:

- Node.js
- Vue, Nuxt, React, Next.js
- TypeScript (includes type definitions)
- Vanilla JavaScript

--

## Data sources

The IP ranges are derived from public routing registries and allocation data (for example APNIC and RIPE). They are maintained in the project and updated as needed.

--

## License

MIT © Rithy Tep

This project is free to use and modify. Contributions are welcome.
