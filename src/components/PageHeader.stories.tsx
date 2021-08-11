import { Story, Meta } from '@storybook/react';

import PageHeader from "./PageHeader";

import styles from "../utils/site.min.module.css";

export default {
    title: "AMC/Page Header",
    component: PageHeader,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  } as Meta;
  
const Template: Story = () => <PageHeader/>;

export const MainPageHeader = Template.bind({});
//MainPageHeader.args = null;