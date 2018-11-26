// @flow strict
import * as fs from "fs";
import * as fsx from "fs-extra";
import path from "path";

const assetsPath = path.join(__dirname, "../assets.json");

export type Assets = {
  bundle: { js: string },
  vendor?: { js: string },
};

function getAssets(): Assets {
  if (!fs.existsSync(assetsPath)) {
    return {
      bundle: { js: "/bundle.js" },
    };
  }

  return fsx.readJsonSync(assetsPath);
}

export const port = Number(process.env.PORT !== undefined ? Number(process.env.PORT) : 3000);

export const routes: string[] = ["/", "/redux", "/context"];

export const assets = getAssets();
