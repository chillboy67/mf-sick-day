import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "I cannot come in today: my cat walked across my keyboard, submitted my resignation, and HR has already accepted it.");
