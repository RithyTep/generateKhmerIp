Here’s a more **natural, human-friendly, and detailed README** for your `khmer-ip-generator` project. I've avoided an "AI-written" tone by adding real-world context, examples, and a friendly voice while keeping it professional. I also added instructions for various languages/frameworks commonly used.

---

# 🇰🇭 Khmer IP Generator

A lightweight, dependency-free JavaScript library for generating **random Cambodian (Khmer) IP addresses** from verified IP ranges. Useful for testing geo-based features, localization, analytics, or security systems.

---

## 📦 Installation

```bash
npm install khmer-ip-generator
```

---

## 🚀 Quick Start

### 🔁 Generate a single IP

```js
import { generateKhmerIp } from 'khmer-ip-generator';

const ip = generateKhmerIp();
console.log(ip); // e.g., "103.111.197.24"
```

### 🔢 Generate multiple IPs

```js
import { generateMultipleKhmerIps } from 'khmer-ip-generator';

const ips = generateMultipleKhmerIps(5);        // 5 random IPs
const uniqueIps = generateMultipleKhmerIps(5, true); // 5 unique IPs
```

---

## 🧠 API Reference

### ✅ `generateKhmerIp()`

Returns a single random IP address from the list of Cambodian IP ranges.

### ✅ `generateMultipleKhmerIps(count, unique = false)`

Generates multiple IPs.

* `count`: Number of IPs to generate.
* `unique` *(optional)*: If `true`, ensures all generated IPs are unique.

### ✅ `getAllKhmerIpRanges()`

Returns an array of all known IP ranges assigned to Cambodia.

### ✅ `getKhmerIpRangesCount()`

Returns how many IP ranges are in the current dataset.

### ✅ `isKhmerIp(ip)`

Checks whether the provided IP belongs to a Cambodian IP range.

```js
isKhmerIp("103.111.197.24"); // true or false
```

---

## 🛠️ Usage Examples

### CommonJS (Node.js)

```js
const khmerIp = require('khmer-ip-generator');

console.log(khmerIp.generateKhmerIp());
console.log(khmerIp.generateMultipleKhmerIps(3));
```

### ES Modules (Vue/Nuxt/React)

```js
import { generateKhmerIp, isKhmerIp } from 'khmer-ip-generator';

const ip = generateKhmerIp();
console.log(isKhmerIp(ip)); // true
```

### Vue 3 Composition API Example

```vue
<template>
  <div>
    <button @click="generateNewIp">🎲 Generate New IP</button>
    <p>🌐 {{ currentIp }}</p>
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

---

## 🔌 Use Cases

* 🧪 QA testing geo-restricted features (e.g., location-based login)
* 🌐 Analytics & regional simulations
* 🔐 IP whitelisting simulations
* 🇰🇭 Apps localized for Cambodian users

---

## 🔤 Language Support

You can use `khmer-ip-generator` in any modern JavaScript environment:

| Environment | Supported              |
| ----------- | ---------------------- |
| Node.js     | ✅ Yes                  |
| Vue.js      | ✅ Yes                  |
| Nuxt.js     | ✅ Yes                  |
| React       | ✅ Yes                  |
| Next.js     | ✅ Yes                  |
| TypeScript  | ✅ Yes (built-in types) |
| Vanilla JS  | ✅ Yes                  |

---

## 📚 Behind the Scenes

The library uses a curated list of **Cambodia-allocated IP ranges** from public sources like APNIC and RIPE. These are stored internally and randomly selected when generating IPs.

---

## 📄 License

MIT © [Rithy Tep](https://github.com/your-github-profile)

Free to use, modify, and share. Contributions welcome!

---

Would you like a badge set (`npm version`, `build status`, `license`, etc.), or auto-generated TypeDocs / site version for docs? I can help you polish that too.
