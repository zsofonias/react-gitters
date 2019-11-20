import React, { useReducer } from 'react';

import AlertReducer from './AlertReducer';

import AlertContext from './AlertContext';

import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = {
    alert: null
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const createAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });
    setTimeout(() => removeAlert(), 3000);
  };

  const removeAlert = () => dispatch({ type: REMOVE_ALERT });

  return (
    <AlertContext.Provider
      value={{ alert: state.alert, createAlert, removeAlert }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
