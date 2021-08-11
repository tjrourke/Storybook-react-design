import React from 'react';
import { Story, Meta } from '@storybook/react';

import ModalMain from "./ModalMain";
import ModalMainProps from '../interfaces/ModalMainProps';

export default {
    title: 'AMC/Modal Dialog',
    component: ModalMain,
    argTypes: {
        children: {control: "text"},
        show: {control: "boolean"},
        size: { 
          options: ["xl", "lg", "sm"],
          control: {
              type: "radio"
          } 
        },
        static: {control: "boolean"}
    },
    args: {
        show: false,
        static: false,
        children: <p>Your content goes here.</p>
    }
  } as Meta;
  
  const Template: Story<ModalMainProps> = (args) => <ModalMain {...args} />;
  
  export const StaticModal = Template.bind({});
  StaticModal.args = {
    children: null,
    title: "Modal - Static Background",
    size: "xl"
  };
  
  export const PlainModal = Template.bind({});
  PlainModal.args = {
    children: null,
    title: "Modal - Non-Static Background",
    size: "xl"
  };