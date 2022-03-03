import { useState } from 'react';
import { useBalance } from 'eth-hooks';

import { utils } from 'ethers';

export interface BalanceProps {
  balance: number;
}

export const Balance: React.FC<BalanceProps> = ({ balance }) => {
  const { dollarMode, toggleMode } = useDollarMode();
  const { displayBalance } = useTokenBalance({ balance, price: 1, dollarMultiplier: 1, dollarMode });
  return <h1 onClick={toggleMode}>{displayBalance}</h1>;
};

export interface TokenBalanceProps {
  balance: number;
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
