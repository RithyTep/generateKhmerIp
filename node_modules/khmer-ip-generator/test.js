
const { 
  generateKhmerIp, 
  generateMultipleKhmerIps, 
  getAllKhmerIpRanges, 
  getKhmerIpRangesCount, 
  isKhmerIp 
} = require('./index.js');

console.log('Testing Khmer IP Generator...\n');

console.log('1. Single IP generation:');
console.log(generateKhmerIp());
console.log(generateKhmerIp());
console.log(generateKhmerIp());

console.log('\n2. Multiple IP generation:');
console.log(generateMultipleKhmerIps(5));

console.log('\n3. Unique IP generation:');
console.log(generateMultipleKhmerIps(5, true));

console.log('\n4. Total IP ranges available:');
console.log(getKhmerIpRangesCount());

console.log('\n5. IP validation:');
console.log('Is 103.5.124.0 a Khmer IP?', isKhmerIp('103.5.124.0'));
console.log('Is 8.8.8.8 a Khmer IP?', isKhmerIp('8.8.8.8'));

console.log('\nAll tests completed!');
