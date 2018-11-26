// @flow strict
/* eslint-disable react/no-danger */
import * as React from "react";

import type { Assets } from "../config";

type Props = {
  root: string,
  css: React.Node,
  assets: Assets,
};

const Html = ({ root, css, assets }: Props) => (
  <html lang="en">
    <head>
      <title>redux2context</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />

      {assets.vendor && <link rel="preload" href={assets.vendor.js} as="script" />}
      <link rel="preload" href={assets.bundle.js} as="script" />

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
        rel="stylesheet"
      />
      {css}
    </head>
    <body>
      <div id="react" dangerouslySetInnerHTML={{ __html: root }} />

      {assets.vendor && <script src={assets.vendor.js} />}
      <script src={assets.bundle.js} />
    </body>
  </html>
);

export default Html;
