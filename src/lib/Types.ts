import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { ApplicationState, AppActions } from './Redux/Store';

/* Redux / API Types
------------------------------------------------------------------- */
export enum ApiStatus {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  UNCHANGED = 'UNCHANGED',
}

export type RequestType = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ErrorResponse {
  name: string;
  message: string;
  data?: any;
}

export type APIResult<T = undefined> = {
  status: ApiStatus;
  error?: ErrorResponse;
  data?: T;
};

export type APIThunkResult<T = undefined> = ThunkAction<
  Promise<APIResult<T>>,
  ApplicationState,
  undefined,
  AppActions
>;

export type APIThunkDispatch = ThunkDispatch<ApplicationState, undefined, AppActions>;

/* Interfaces
------------------------------------------------------------------- */
export type Example = {
  id: number;
};
