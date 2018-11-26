// @flow strict
import * as fsx from "fs-extra";
import path from "path";

import markup from "./markup";
import { routes } from "./config";

const OUT = path.join(__dirname, "../static/pages");

const makeStream = route =>
  new Promise((resolve, reject) => {
    const fileDir = path.join(OUT, route);
    fsx.ensureDirSync(fileDir);

    const htmlStream = markup(route);
    const fileStream = fsx.createWriteStream(path.join(fileDir, "index.html"));

    htmlStream.pipe(fileStream);

    fileStream.on("error", err => {
      reject(err);
    });

    fileStream.on("finish", () => {
      resolve();
    });
  });

async function render() {
  const oks = Promise.all(routes.map(makeStream));

  return oks.catch(err => {
    console.error("[render] Error!", err); // eslint-disable-line no-console
  });
}

render();
