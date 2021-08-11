import { Story, Meta } from '@storybook/react';
import '../../lib/bootstrap/dist/css/bootstrap.css';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from "./Headings";

export default {
  title: "AMC - BHHC Bootstrap/Headings",
  component: Heading1,
  argTypes: {
    text: { control: "text" }
  }
} as unknown as Meta;
  
const Template1: Story = (args) => <Heading1>{args.text}</Heading1>;
export const H1AndPortalTitle = Template1.bind({});
H1AndPortalTitle.args = {
  text: 'AUDIT MANAGEMENT CENTER'
};
  
const Template2: Story = (args) => <Heading2>{args.text}</Heading2>;
export const H2AndPageTitle = Template2.bind({});
H2AndPageTitle.args = {
  text: 'Heading Level Two'
};

const Template3: Story = (args) => <Heading3>{args.text}</Heading3>;
export const H3AndSection = Template3.bind({});
H3AndSection.args = {
  text: 'Heading Level Three'
};

const Template4: Story = (args) => <Heading4>{args.text}</Heading4>;
export const H4 = Template4.bind({});
H4.args = {
  text: 'Heading Level Four'
};

const Template5: Story = (args) => <Heading5>{args.text}</Heading5>;
export const H5 = Template5.bind({});
H5.args = {
  text: 'Heading Level Five'
};

const Template6: Story = (args) => <Heading6>{args.text}</Heading6>;
export const H6 = Template6.bind({});
H6.args = {
  text: 'Heading Level Six'
};