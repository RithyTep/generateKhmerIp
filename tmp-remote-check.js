const { isKhmerIpRemote } = require('./index.js');

async function demo() {
  try {
    console.log('Checking 103.5.124.0 (should be KH):');
    const a = await isKhmerIpRemote('103.5.124.0', { fallbackToLocal: true });
    console.log('=>', a);

    console.log('Checking 8.8.8.8 (should be non-KH):');
    const b = await isKhmerIpRemote('8.8.8.8', { fallbackToLocal: true });
    console.log('=>', b);
  } catch (err) {
    console.error('Remote check error:', err.message);
  }
}

demo();
