#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const REQUIRED = [
  "/images/hero-poster.jpg",
  "/images/project-cnc.jpg",
  "/images/project-facility.jpg",
  "/images/project-engineering.jpg",
  "/images/machines/park-hero.jpg",
  "/images/machines/mill-dmg.jpg",
  "/images/machines/mill-haas.jpg",
  "/images/machines/mill-compact.jpg",
  "/images/machines/lathe.jpg",
  "/images/explore-about.jpg",
  "/images/explore-why.jpg",
  "/images/explore-contact.jpg",
  "/videos/hero.mp4",
  "/brand/hexa-logo.png",
];

let failed = false;

for (const rel of REQUIRED) {
  const abs = path.join(root, "public", rel.replace(/^\//, ""));
  if (!fs.existsSync(abs)) {
    console.error(`EKSİK: ${rel}`);
    failed = true;
    continue;
  }
  const stat = fs.statSync(abs);
  if (stat.size < 100) {
    console.error(`BOŞ: ${rel}`);
    failed = true;
    continue;
  }
  console.log(`OK  ${rel}`);
}

process.exit(failed ? 1 : 0);
