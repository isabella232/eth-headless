import { useState } from 'react';

import { BigNumber, utils } from 'ethers';

export interface BalanceProps {
  balance: BigNumber;
  ethPrice: number;
}

export const Balance: React.FC<BalanceProps> = ({ balance, ethPrice }) => {
  const { dollarMode, toggleMode } = useDollarMode();
  const { displayBalance } = useTokenBalance({ balance, price: ethPrice, dollarMultiplier: 1, dollarMode });

  return (
    <span
      style={{
        verticalAlign: 'middle',
        padding: 8,
        cursor: 'pointer',
      }}
      onClick={toggleMode}>
      {displayBalance}
    </span>
  );
};

export interface TokenBalanceProps {
  balance: BigNumber;
  price: number;
  dollarMultiplier: number;
  dollarMode: boolean;
}

export interface TokenBalanceReturn {
  displayBalance: string;
}

const useTokenBalance = (props: TokenBalanceProps) => {
  const { balance, price, dollarMultiplier, dollarMode } = props;
  let floatBalance = parseFloat('0.00');
  let usingBalance = balance;

  if (usingBalance) {
    const etherBalance = utils.formatEther(usingBalance);
    parseFloat(etherBalance).toFixed(2);
    floatBalance = parseFloat(etherBalance);
  }

  let displayBalance = floatBalance.toFixed(4);

  const p = price || dollarMultiplier || 1;

  if (dollarMode) {
    displayBalance = '$' + (floatBalance * p).toFixed(2);
  }

  return {
    displayBalance,
  };
};

export interface DollarModeReturn {
  dollarMode: boolean;
  toggleMode: () => void;
}

const useDollarMode = () => {
  const [dollarMode, setDollarMode] = useState(true);

  const toggleMode = () => {
    setDollarMode(!dollarMode);
  };

  return {
    dollarMode,
    toggleMode,
  };
};
