import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Balance } from './Balance';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Balance',
  component: Balance,
} as ComponentMeta<typeof Balance>;

export const Primary: ComponentStory<typeof Balance> = () => <Balance balance={12}>Button</Balance>;
