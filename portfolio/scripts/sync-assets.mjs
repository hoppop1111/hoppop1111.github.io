// Copies the repo-root `assets/` media (photo, resume, certificates, Excel files)
// into `public/assets/` so the Next.js site can serve them without keeping a
// second copy in git. Runs automatically before `dev` and `build`.
import { cpSync, existsSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "..", "assets");
const target = join(root, "public", "assets");

if (!existsSync(source)) {
  console.warn(`sync-assets: ${source} not found, skipping`);
  process.exit(0);
}

rmSync(target, { recursive: true, force: true });
for (const dir of ["images", "docs", "certs", "dashboard"]) {
  cpSync(join(source, dir), join(target, dir), { recursive: true });
}
console.log("sync-assets: copied ../assets -> public/assets");
