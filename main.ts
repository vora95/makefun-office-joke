// Make the AI Judge Laugh: Office Jokes — one original office one-liner.
// The grader runs this program twice; it must write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "In standup I said 'no blockers' while staring directly at the blocker, who nodded and said 'same.'";

// Gate: the entry must be UTF-8 text of 1 to 199 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-199 characters, got ${JOKE.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
