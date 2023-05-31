import { Meta, StoryObj } from "@storybook/react";
import Label from "../../components/Label";

const meta: Meta<typeof Label> = {
  title: "UI/labels/Label",
  tags: ["autodocs"],
  component: Label,
  argTypes: {
    fontColor: { control: "color" },
    color: { control: "select", options: ["primary", "secondary", "accent"] },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: { size: "normal", text: "Normal", color: "primary" },
};

export const Secondary = {
  args: { size: "normal", color: "secondary" },
};

export const Capitalize = {
  args: { size: "normal", capitalize: true, color: "primary" },
};

export const Large: Story = {
  args: { size: "h1", text: "Large", color: "primary" },
};
