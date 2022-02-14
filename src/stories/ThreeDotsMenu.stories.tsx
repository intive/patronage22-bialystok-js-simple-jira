import { ComponentStory, ComponentMeta } from "@storybook/react";
import ThreeDotsMenu from "../components/ThreeDotsMenu/ThreeDotsMenu";

import { mockMenuItems } from "../mockData/menuItems";

export default {
  title: "ThreeDotsMenu",
  component: ThreeDotsMenu,
};

const Template: ComponentStory<typeof ThreeDotsMenu> = (args: any) => (
  <ThreeDotsMenu {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  menuItems: mockMenuItems,
};
