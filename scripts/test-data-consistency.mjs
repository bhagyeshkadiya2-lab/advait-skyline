import fs from 'node:fs';
import path from 'node:path';

const FORBIDDEN_TOKENS = [
  'FILL_UNITS',
  'FILL_PRICE_1BHK',
  'FILL_PRICE_2BHK',
  'FILL_POSSESSION',
  'FILL_PARKING',
  'FILL_RERA',
  '{price}',
  '&#123;price&#125;',
  'TODO(FACT)',
];

const SCAN_DIRS = ['app', 'components', 'lib', 'messages'];
const EXTENSIONS = ['.ts', '.tsx', '.json', '.js', '.mjs'];

let totalErrors = 0;
let filesScanned = 0;

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next') {
        scanDir(fullPath);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (EXTENSIONS.includes(ext)) {
        filesScanned++;
        const content = fs.readFileSync(fullPath, 'utf8');
        for (const token of FORBIDDEN_TOKENS) {
          if (content.includes(token)) {
            console.error(`❌ [DATA ERROR] File contains forbidden token "${token}": ${fullPath}`);
            totalErrors++;
          }
        }
      }
    }
  }
}

console.log('====================================================');
console.log(' ADVAIT SKYLINE — AUTOMATED DATA CONSISTENCY TEST   ');
console.log('====================================================');

for (const dir of SCAN_DIRS) {
  scanDir(dir);
}

// Check master data in siteConfig.ts
const siteConfigPath = path.join(process.cwd(), 'lib', 'siteConfig.ts');
if (fs.existsSync(siteConfigPath)) {
  const content = fs.readFileSync(siteConfigPath, 'utf8');
  if (!content.includes('328')) {
    console.error('❌ [SPEC ERROR] siteConfig.ts does not contain 328 units');
    totalErrors++;
  }
  if (!content.includes('575 sq. ft.')) {
    console.error('❌ [SPEC ERROR] siteConfig.ts does not contain 575 sq. ft. 1 BHK');
    totalErrors++;
  }
  if (!content.includes('652 sq. ft.')) {
    console.error('❌ [SPEC ERROR] siteConfig.ts does not contain 652 sq. ft. 2 BHK');
    totalErrors++;
  }
  if (!content.includes('PM3000002600013')) {
    console.error('❌ [SPEC ERROR] siteConfig.ts does not contain RERA PM3000002600013');
    totalErrors++;
  }
  if (!content.includes('Before March 2028')) {
    console.error('❌ [SPEC ERROR] siteConfig.ts does not contain possession Before March 2028');
    totalErrors++;
  }
}

console.log(`\nScan finished: ${filesScanned} files examined across [${SCAN_DIRS.join(', ')}].`);

if (totalErrors === 0) {
  console.log('✅ ALL DATA CONSISTENCY CHECKS PASSED: Zero forbidden placeholders, 100% master spec alignment.\n');
  process.exit(0);
} else {
  console.error(`\n❌ FAILED: ${totalErrors} data inconsistency errors detected.\n`);
  process.exit(1);
}
