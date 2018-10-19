import { RSAA } from 'redux-api-middleware';
import { API_DOMAIN } from '../constants';
import * as types from './actionTypes';

export const sample = () => ({ type: types.SAMPLE });

export const fetchIssues = () => ({
  [RSAA]: {
    endpoint: `${API_DOMAIN}/repos/reduxjs/redux/issues`,
    method: 'GET',
    types: ['REQUEST', 'SUCCESS', 'FAILURE'],
  },
});
