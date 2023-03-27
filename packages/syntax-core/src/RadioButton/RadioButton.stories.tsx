import { StoryObj, Meta } from "@storybook/react";
import RadioButton from "./RadioButton";

export default {
  title: "RadioButton",
  component: RadioButton,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/p7LKna9JMU0JEkcKamzs53/%F0%9F%93%90-Syntax?node-id=1007-4104&t=Vt5ql6LLs6d29szu-0",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof RadioButton>;

export const Default: StoryObj<typeof RadioButton> = { args: {} };
