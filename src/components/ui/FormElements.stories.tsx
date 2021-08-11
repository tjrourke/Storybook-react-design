import { Story, Meta } from '@storybook/react';

import '../../lib/bootstrap/dist/css/bootstrap.css';
import "../site.css";
import { Input, Checkbox, DateInput, EmailInput, FeinInput, PasswordInput, PhoneNumberInput, PostalCodeInput, Radio, CurrencyEntry, InputProps, CheckboxProps } from "./FormElements";

export default {
  component: Input,
  title: "AMC - BHHC Bootstrap/Form Elements",
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" }
  },
} as unknown as Meta;

const TemplateInput: Story = (args: any) => <Input {...args}/>;
export const InputCommon = TemplateInput.bind({});
InputCommon.args = {
  placeholder: "Enter text here",
  value: "This is an input box."
};

const TemplateInputCheckbox: Story = (args: any) => <Checkbox {...args}/>;
export const InputCheckboxCommon = TemplateInputCheckbox.bind({});
InputCheckboxCommon.args = {
  label: "Check here",
  value: true,
  checked: true
};

const TemplateInputDate: Story = (args: any) => <DateInput {...args}/>;
export const InputDateCommon = TemplateInputDate.bind({});
InputDateCommon.args = {
  placeholder: "Enter date here",
  value: "01/01/0001"
};

const TemplateInputEmail: Story = (args: any) => <EmailInput {...args}/>;
export const InputEmailCommon = TemplateInputEmail.bind({});
InputEmailCommon.args = {
  placeholder: "Enter email here",
  value: "doNotReplyAll@please.com"
};

const TemplateInputFein: Story = (args: any) => <FeinInput {...args}/>;
export const InputFeinCommon = TemplateInputFein.bind({});
InputFeinCommon.args = {
  placeholder: "Enter FEIN here",
  value: "012345678"
};

const TemplateInputPassword: Story = (args: any) => <PasswordInput {...args}/>;
export const InputPasswordCommon = TemplateInputPassword.bind({});
InputPasswordCommon.args = {
  placeholder: "Enter password here",
  value: "My voice is my passport."
};

const TemplateInputPhone: Story = (args: any) => <PhoneNumberInput {...args}/>;
export const InputPhoneCommon = TemplateInputPhone.bind({});
InputPhoneCommon.args = {
  placeholder: "(000) 111-2222",
  value: "9999999999"
};

const TemplateInputPostalCode: Story = (args: any) => <PostalCodeInput {...args}/>;
export const InputPostalCodeCommon = TemplateInputPostalCode.bind({});
InputPostalCodeCommon.args = {
  placeholder: "12345-2333",
  value: "68131"
};

const TemplateInputRadio: Story = (args: any) => <Radio {...args}/>;
export const InputRadioCommon = TemplateInputRadio.bind({});
InputRadioCommon.args = {
  label: "Check here",
  value: true,
  checked: true
};

const TemplateCurrencyEntry: Story = (args: any) => <CurrencyEntry {...args}/>;
export const CurrencyEntryDollarsOnly = TemplateCurrencyEntry.bind({});
CurrencyEntryDollarsOnly.args = {
  placeholder: "Enter text here",
  value: "100000"
};
