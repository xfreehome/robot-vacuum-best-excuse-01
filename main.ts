// The Robot Vacuum's Best Excuse — make.fun bounty
// u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214
//
// Writes one original one-line excuse from a robot vacuum for missing a spot
// to /output/entry.txt (UTF-8, 1-140 chars, single line).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My cliff sensor mistook the dust bunny for a staircase, so I filed a safety report and now that corner is officially a cliff.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
console.log(ENTRY);
