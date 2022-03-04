import { useBalance } from 'eth-hooks';
import { useDexEthPrice } from 'eth-hooks/dapps';
import { useEthersContext } from 'eth-hooks/context';
import { TEthersProvider } from 'eth-hooks/models';
import { Balance } from './Balance';

export interface ConsumerProps {
  provider: TEthersProvider;
}

export const ConsumerOfHeadlessLibrary: React.FC<ConsumerProps> = ({ provider }) => {
  const ethersContext = useEthersContext();
  const [price] = useDexEthPrice(provider);
  const [balance] = useBalance(ethersContext.account);

  return <Balance balance={balance} ethPrice={price}></Balance>;
};
