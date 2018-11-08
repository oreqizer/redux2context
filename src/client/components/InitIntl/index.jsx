// @flow strict
import * as React from "react";
import Polyglot from "node-polyglot";

import type { IntlRaw, Intl } from "client/records/Intl";

type Arg = Intl;

type Props = {|
  intl: IntlRaw,
  children: (arg: Arg) => React.Node,
|};

const InitIntl = ({ intl, children }: Props) =>
  children({
    ...intl,
    t: (k, v) => new Polyglot({ locale: intl.locale, phrases: intl.translations }).t(k, v),
  });

export default InitIntl;