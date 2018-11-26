// @flow strict
import * as React from "react";
import { storiesOf } from "@storybook/react";
// $FlowExpected: Bad libdefs
import { withKnobs, text } from "@storybook/addon-knobs";

import Message from "client/components/MessageBox";

storiesOf("Message", module)
  .addDecorator(withKnobs)
  .add("default", () => <Message>{text("Text", "kek")}</Message>)
  .add("incoming", () => <Message incoming>{text("Text", "kek")}</Message>);
