import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

const locked = {
  "public/brand/lockups/signal-horizontal.svg":
    "85459232bf51e7bf7c94225fd4f2cd6b71a681b6d701cb4ffd6d2a142cf57a81",
  "public/brand/lockups/signal-stacked.svg":
    "11314b300284db342bc15a7c7695c23199f65f68178af45586b62d01e9ea133a",
  "styles/tokens.css": "9b1f68b4a44d79f0990778953c208af96c08e5bd8bd4f70b16697fbb24f51e52",
  "styles/motion.css": "36b2f4d56439871d1ae46d4e2ad3e3d0d0b5da7a2700c503d4382247784b2f5c",
};

test("SIGNAL assets used by the UI match the package manifest", () => {
  for (const [path, sha256] of Object.entries(locked)) {
    const digest = createHash("sha256").update(readFileSync(path)).digest("hex");
    assert.equal(digest, sha256, path);
  }
});
