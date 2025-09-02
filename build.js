const { execSync } = require('child_process');
try {
  console.log('Running prebuild (sync README version)...');
  try {
    execSync('node ./scripts/sync-version.js', { stdio: 'inherit' });
  } catch (e) {
  }

  console.log('No further build steps configured.');
  process.exit(0);
} catch (err) {
  console.error('Build failed:', err && err.message);
  process.exit(1);
}
