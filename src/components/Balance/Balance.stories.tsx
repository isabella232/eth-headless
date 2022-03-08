import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useBalance } from './Balance';

import { utils } from 'ethers';

// export default {
//   title: 'Balance',
//   component: Balance,
// } as ComponentMeta<typeof Balance>;

// export const Primary: ComponentStory<typeof Balance> = () => {
//   const { displayBalance, toggleMode } = useBalance({ address: '0x0000000000000000000000000000000000000000' });
//   return (
//     <span
//       className="Balance"
//       style={{
//         verticalAlign: 'middle',
//         fontSize: 24,
//         padding: 8,
//         cursor: 'pointer',
//       }}
//       onClick={toggleMode}>
//       {displayBalance}
//     </span>
//   );
// };
