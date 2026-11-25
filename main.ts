// Real-Life Patch Notes: The Comedy Changelog
// Writes one one-line patch note for a real-life bug to /output/entry.txt.
// The grader runs this with no arguments; the output directory defaults to
// /output and is created first (it is a directory, never written as a file).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v3.4: Fixed an issue where a spoon under the kitchen tap selected the user's shirt as the output device.";

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
