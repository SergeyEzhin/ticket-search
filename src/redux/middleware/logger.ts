import { Middleware, Dispatch, AnyAction } from 'redux';

export const logger: Middleware = (store) => (next: Dispatch) => (
  action: AnyAction
) => {
  console.log(action);
  next(action);
};