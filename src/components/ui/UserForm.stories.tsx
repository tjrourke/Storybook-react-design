import { Story, Meta } from '@storybook/react';

import '../../lib/bootstrap/dist/css/bootstrap.css';
import "../site.css";
import UserForm from "./UserForm";

export default {
  component: UserForm,
  title: "AMC - BHHC Bootstrap/Forms",
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" }
  },
} as unknown as Meta;

const TemplateInput: Story = (args) => <UserForm {...args}/>;
export const UserForm1 = TemplateInput.bind({});
UserForm1.args = {
  placeholder: "Enter text here",
  value: "This is an input box."
};