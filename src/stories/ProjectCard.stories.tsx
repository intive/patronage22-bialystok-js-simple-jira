import { ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

import ProjectCard from "@components/ProjectCard";
import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";
import { theme } from "../theme/mainTheme";
import { mockMenuItems } from "../mockData/menuItems";

export default {
  title: "ProjectCard",
  component: ProjectCard,
};

const Template: ComponentStory<typeof ProjectCard> = (args) => (
  <ThemeProvider theme={theme}>
    <div style={{ maxWidth: 416 }}>
      <ProjectCard {...args} />
    </div>
  </ThemeProvider>
);

export const WithoutMenuComponent = Template.bind({});

WithoutMenuComponent.args = {
  name: "Awesome project",
};

export const WithThreeDotsMenu = Template.bind({});

WithThreeDotsMenu.args = {
  name: "Awesome project",
  menuComponent: <ThreeDotsMenu menuItems={mockMenuItems} />,
};

WithoutMenuComponent.parameters = WithThreeDotsMenu.parameters = {
  controls: {
    include: ["name"],
  },
};
