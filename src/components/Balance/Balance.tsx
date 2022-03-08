import { useState } from 'react';

import { BigNumber, utils } from 'ethers';
import { useBalance as useEthHooksBalance } from 'eth-hooks';

interface BalanceProps {
  address: string;
  price?: number;
  balance?: BigNumber;
  dollarMultiplier?: number;
}

interface UseBalanceResult {
  displayBalance: string;
  toggleMode: () => void;
}

export const useBalance = (props: BalanceProps): UseBalanceResult => {
  const [dollarMode, setDollarMode] = useState(true);
  const [balance] = useEthHooksBalance(props.address);

  let resolvedBalance = BigNumber.from(balance ?? 0);
  if (props.balance != null) {
    resolvedBalance = BigNumber.from(props.balance);
  }

  let floatBalance = parseFloat('0.00');
  if (resolvedBalance) {
    const etherBalance = utils.formatEther(resolvedBalance);
    floatBalance = parseFloat(etherBalance);
  }

  let displayBalance = floatBalance.toFixed(4);
  const price = props.price ?? props.dollarMultiplier;
  if (price && dollarMode) {
    displayBalance = '$' + (floatBalance * price).toFixed(2);
  }

  const toggleMode = () => {
    setDollarMode(!dollarMode);
  };

  return {
    displayBalance,
    toggleMode,
  };
};
