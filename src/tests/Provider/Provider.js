import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';

import defaultStore from '../../redux/store';

const Provider = ({ store, children }) => (
	<StoreProvider store={{ ...defaultStore, ...store }}>
		{children}
	</StoreProvider>
)

export default Provider;
