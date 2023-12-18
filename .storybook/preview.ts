import type { Preview } from "@storybook/react";
import "../src/app/styles/index.scss";
import { RouterDecorator } from "./decorators/RouterDecorator";
import { ContextDecorator } from "./decorators/ContextDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [RouterDecorator, ContextDecorator],
};

export default preview;
