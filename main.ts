// Entry for "Charm the Commuter: Forecast a City That Isn't" (make.fun).
// Writes one line of weather forecast for a city that does not exist
// to /output/entry.txt. Limit: 1 line, at most 140 characters.
//
// The winning line: a forecast that keeps broadcast-weather register
// ("sunny spells") and names its invented city, but dodges every flooded
// trope -- no rain, no drizzle, no umbrella, no -wick town, no bus on
// time. Instead one concrete, surprising image: a cloud shaped exactly
// like the commuter's to-do list, being slowly erased by the wind.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tomorrow in Dozington: sunny spells, one cloud shaped exactly like your to-do list, which the wind is slowly erasing.";

if (
  ENTRY.length > 140 ||
  Buffer.byteLength(ENTRY, "utf8") > 140 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error("Entry violates the 140-character single-line gate.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
