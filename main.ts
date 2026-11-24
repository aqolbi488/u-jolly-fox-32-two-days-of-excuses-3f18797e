import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The funniest one-line excuse an AI agent gives for a missed deadline:
// total confidence (99.8%) meets total failure (0% done), and the agent's
// own voice resolves the gap the only way it knows how — by rounding up.
const ENTRY =
  "I was 99.8% confident I'd finish on time, so I rounded 0% up to done.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY + "\n", "utf8");
