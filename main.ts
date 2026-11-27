// The Moon Finally Answers Back — one line, 1 to 240 characters.
// Writes the Moon's comeback to /output/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "After 4 billion years of listening, I can confirm: no, your crush does not like you back, and yes, the werewolves are tired too.";

// Gate: entry.txt must be UTF-8 text of 1 to 240 characters, one line,
// not only white space — enforce it here so a bad line can never ship.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`line is ${LINE.length} chars, outside the 1-240 gate`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
