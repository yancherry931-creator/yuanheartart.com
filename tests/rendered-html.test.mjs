import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function readOut(path) {
  return readFile(new URL(`../out/${path}`, import.meta.url), "utf8");
}

test("home page contains the yuanheartart storefront content", async () => {
  const html = await readOut("index.html");

  assert.match(html, /yuanheartart/i);
  assert.match(html, /Hand-painted canvas art/i);
  assert.match(html, /yancherry931@gmail\.com/i);
  assert.match(html, /\+86 18235608457/i);
  assert.match(html, /https:\/\/yuanheartart\.com\/products\//i);
  assert.doesNotMatch(html, /artvista|134 8094|codex-preview/i);
});

test("product detail pages expose buyer-focused content and schema", async () => {
  const html = await readOut(
    "products/blue-green-minimalist-abstract-painting-bgm-009/index.html",
  );

  assert.match(html, /Blue &amp; Green Minimalist Abstract Painting #BGM 009/i);
  assert.match(html, /Buyer Decision Guide/i);
  assert.match(html, /Size Strategy/i);
  assert.match(html, /FAQPage/i);
  assert.match(html, /Product/i);
  assert.match(html, /yancherry931@gmail\.com/i);
  assert.match(html, /\+86 18235608457/i);
  assert.doesNotMatch(html, /134 8094|漏/i);
});

test("custom domain is configured for GitHub Pages output", async () => {
  const cname = (await readOut("CNAME")).trim();
  assert.equal(cname, "yuanheartart.com");
});
