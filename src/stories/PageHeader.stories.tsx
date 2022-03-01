import { ComponentStory } from "@storybook/react";
import PageHeader from "@modules/PageHeader/PageHeader";

export default {
  title: "PageHeader",
  component: PageHeader,
};

const Template: ComponentStory<typeof PageHeader> = (args: any) => (
  <PageHeader {...args} />
);

export const WithText = Template.bind({});
export const WithoutText = Template.bind({});

WithText.args = {
  pageTitle: "Projects",
  buttonText: "New project",
};
