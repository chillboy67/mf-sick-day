// Puts the sick-day excuse into entry.txt for the make.fun run.
// The cat did the resigning; this script only does the filing.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const destDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const excuseText =
  "I cannot come in today: my cat walked across my keyboard, submitted my resignation, and HR has already accepted it.";

mkdirSync(destDir, { recursive: true });
writeFileSync(join(destDir, "entry.txt"), excuseText);
console.log("excuse saved in " + destDir);
