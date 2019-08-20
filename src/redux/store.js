import { createStore, compose } from 'redux';
import reducer from './reducer';
import { onNumsUpdate } from './subscribes';

const composeEnhancers =  process.env.NODE_ENV !== 'production'
	&& typeof window === 'object'
	&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 20 })
		: compose;

const store = createStore(
	reducer,
	composeEnhancers(),
);

store.subscribe(() => onNumsUpdate(store.getState(), store.dispatch));

export default store;
