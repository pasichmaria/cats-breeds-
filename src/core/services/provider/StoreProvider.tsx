import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../../store';

type Props = {
  children: React.ReactNode;
};

export const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
