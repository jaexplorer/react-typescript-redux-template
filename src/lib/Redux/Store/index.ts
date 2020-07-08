import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
  Store,
  CombinedState,
  AnyAction,
} from 'redux';
import thunk from 'redux-thunk';
import { ExampleState, ExampleActionTypes } from '../Types/example';
import ExampleReducer from '../Reducers/example';
import { LoadingState, LoadingActionTypes } from '../Types/loading';
import LoadingReducer from '../Reducers/loading';

export interface ApplicationState {
  exampleState: ExampleState;
  loadingState: LoadingState;
}

const rootReducer = combineReducers<ApplicationState>({
  exampleState: ExampleReducer,
  loadingState: LoadingReducer,
});

export type AppActions = ExampleActionTypes | LoadingActionTypes;

const configureStore = (): Store<CombinedState<ApplicationState>, AnyAction> => {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
};

export default configureStore;
