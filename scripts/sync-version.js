#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pkgPath = path.join(root, 'package.json');
const readmePath = path.join(root, 'README.md');

function readFile(p) {
  try {
    return fs.readFileSync(p, 'utf8');
  } catch (err) {
    console.error(`Failed to read ${p}:`, err.message);
    process.exit(2);
  }
}

function writeFile(p, data) {
  try {
    fs.writeFileSync(p, data, 'utf8');
  } catch (err) {
    console.error(`Failed to write ${p}:`, err.message);
    process.exit(3);
  }
}

const pkg = JSON.parse(readFile(pkgPath));
const version = pkg.version || '';

if (!version) {
  console.error('No version found in package.json');
  process.exit(1);
}

let readme = readFile(readmePath);

const updated = readme.replace(/\*\*Version\*\*:\s*[^\n\r]*/g, `**Version**: ${version}`);

if (updated === readme) {
  console.log(`README.md already at version ${version}`);
  process.exit(0);
}

writeFile(readmePath, updated);
console.log(`Updated README.md version -> ${version}`);
