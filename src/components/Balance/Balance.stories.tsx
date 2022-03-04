import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Balance } from './Balance';

import { utils } from 'ethers';

export default {
  title: 'Balance',
  component: Balance,
} as ComponentMeta<typeof Balance>;

export const Primary: ComponentStory<typeof Balance> = () => (
  <Balance balance={utils.parseEther('1.4')} ethPrice={2900}></Balance>
);
