import axios from 'axios';
import {config} from '../constants';

export const api = axios.create({
  baseURL: config.apiUrl,
  headers: {
    Accept: 'application/json'
  }
})