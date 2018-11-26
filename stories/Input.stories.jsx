// @flow strict
import * as React from "react";
import { storiesOf } from "@storybook/react";
// $FlowExpected: Bad libdefs
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Input from "client/components/Input";

storiesOf("Input", module)
  .addDecorator(withKnobs)
  .add("default", () => <Input onSubmit={action("Submit")} />);
