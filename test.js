
const {
  generateKhmerIp,
  generateMultipleKhmerIps,
  getKhmerIpRangesCount,
  isKhmerIp
} = require('./index.js');

console.log('Testing Khmer IP Generator...\n');

// Test single IP generation
console.log('1. Single IP generation:');
console.log(generateKhmerIp());
console.log(generateKhmerIp());
console.log(generateKhmerIp());

// Test multiple IP generation
console.log('\n2. Multiple IP generation:');
console.log(generateMultipleKhmerIps(5));

// Test unique IP generation
console.log('\n3. Unique IP generation:');
console.log(generateMultipleKhmerIps(5, true));

// Test range count
console.log('\n4. Total IP ranges available:');
console.log(getKhmerIpRangesCount());

// Test IP validation
console.log('\n5. IP validation:');
console.log('Is 103.5.124.0 a Khmer IP?', isKhmerIp('103.5.124.0'));
console.log('Is 8.8.8.8 a Khmer IP?', isKhmerIp('8.8.8.8'));

console.log('\nAll tests completed!');

// ---- Extended tests: 50-case scenarios ----
console.log('\n6. Bulk generation (50 IPs):');
const bulk = generateMultipleKhmerIps(50);
console.log('Generated:', bulk.length);
console.log('Sample 10:', bulk.slice(0, 10));

console.log('\n7. Bulk unique generation (50 IPs):');
const bulkUnique = generateMultipleKhmerIps(50, true);
console.log('Requested 50 unique, received:', bulkUnique.length);
console.log('First 10 unique sample:', bulkUnique.slice(0, 10));
console.log('All unique?', new Set(bulkUnique).size === bulkUnique.length);

console.log('\n8. Validate bulk-generated IPs:');
const validated = bulk.map(ip => ({ ip, valid: isKhmerIp(ip) }));
const validCount = validated.filter(x => x.valid).length;
console.log(`Valid IPs (local heuristic) out of ${bulk.length}:`, validCount);

console.log('\n9. Cross-check ranges count:');
console.log('getKhmerIpRangesCount():', getKhmerIpRangesCount());

console.log('\nExtended tests completed!');

// ---- 10. Fifty different test cases (programmatic) ----
console.log('\n10. Running 50 different test cases:');

const sampleValidateIps = [
  '103.5.124.0', // expected KH by local
  '154.214.2.5',
  '163.47.12.100',
  '8.8.8.8',
  '203.167.16.12'
];

const testCases = [];
for (let i = 0; i < 50; i++) {
  if (i < 10) {
    testCases.push({ id: i + 1, name: `single-${i + 1}`, type: 'single' });
  } else if (i < 20) {
    // small multi
    const count = (i % 5) + 1;
    testCases.push({ id: i + 1, name: `multi-${count}-${i + 1}`, type: 'multi', count });
  } else if (i < 30) {
    // unique multi
    const count = 5 + (i % 5);
    testCases.push({ id: i + 1, name: `unique-${count}-${i + 1}`, type: 'unique', count });
  } else if (i < 35) {
    // edge cases
    testCases.push({ id: i + 1, name: `edge-zero-${i + 1}`, type: 'edge', case: 'zero' });
  } else if (i < 40) {
    testCases.push({ id: i + 1, name: `edge-neg-${i + 1}`, type: 'edge', case: 'negative' });
  } else if (i < 45) {
    // validation checks using sample IPs
    const ip = sampleValidateIps[i % sampleValidateIps.length];
    testCases.push({ id: i + 1, name: `validate-${ip}-${i + 1}`, type: 'validate', ip });
  } else {
    // stress-ish: larger generation (but keep reasonable)
    const count = 50 + (i - 45) * 10; // 50,60,70,80,90
    testCases.push({ id: i + 1, name: `stress-${count}-${i + 1}`, type: 'stress', count });
  }
}

for (const t of testCases) {
  try {
    switch (t.type) {
      case 'single': {
        const ip = generateKhmerIp();
        console.log(`#${t.id} ${t.name}: single -> ${ip}`);
        break;
      }
      case 'multi': {
        const ips = generateMultipleKhmerIps(t.count);
        console.log(`#${t.id} ${t.name}: multi(${t.count}) -> ${ips.length} items`);
        break;
      }
      case 'unique': {
        const ips = generateMultipleKhmerIps(t.count, true);
        const unique = new Set(ips).size === ips.length;
        console.log(`#${t.id} ${t.name}: unique(${t.count}) -> got ${ips.length}, allUnique=${unique}`);
        break;
      }
      case 'edge': {
        if (t.case === 'zero') {
          const ips = generateMultipleKhmerIps(0);
          console.log(`#${t.id} ${t.name}: generateMultipleKhmerIps(0) -> ${ips.length}`);
        } else {
          const ips = generateMultipleKhmerIps(-5);
          console.log(`#${t.id} ${t.name}: generateMultipleKhmerIps(-5) -> ${ips.length}`);
        }
        break;
      }
      case 'validate': {
        const res = isKhmerIp(t.ip);
        console.log(`#${t.id} ${t.name}: isKhmerIp(${t.ip}) -> ${res}`);
        break;
      }
      case 'stress': {
        const ips = generateMultipleKhmerIps(t.count);
        console.log(`#${t.id} ${t.name}: stress(${t.count}) -> ${ips.length}`);
        break;
      }
      default:
        console.log(`#${t.id} ${t.name}: unknown test type`);
    }
  } catch (err) {
    console.log(`#${t.id} ${t.name}: ERROR -> ${err && err.message}`);
  }
}

console.log('\n50 different test cases completed.');

// ---- Sub-IP tests: ensure generator returns host addresses (not .0 network bases) ----
console.log('\n11. Sub-IP tests (ensure last octet != 0):');

// Single checks
const singles = Array.from({ length: 20 }, () => generateKhmerIp());
const singlesZeros = singles.filter(ip => ip.split('.').pop() === '0');
console.log('Generated 20 single IPs, examples:', singles.slice(0, 5));
console.log('Count ending with .0 (should be 0):', singlesZeros.length);

// Multiple generation check
const many = generateMultipleKhmerIps(50);
const manyZeros = many.filter(ip => ip.split('.').pop() === '0');
console.log('Generated 50 multi IPs, count ending with .0 (should be 0):', manyZeros.length);

// Unique generation check
const manyUnique = generateMultipleKhmerIps(50, true);
const uniqueZeros = manyUnique.filter(ip => ip.split('.').pop() === '0');
console.log('Generated 50 unique IPs, count ending with .0 (should be 0):', uniqueZeros.length);

// Validate that a generated sub-ip is recognized by isKhmerIp
const sampleHost = singles.find(ip => ip.split('.').pop() !== '0');
if (sampleHost) {
  console.log('Sample host IP:', sampleHost, 'isKhmerIp ->', isKhmerIp(sampleHost));
} else {
  console.log('No host IP sample found to validate.');
}

console.log('\nSub-IP tests completed.');
