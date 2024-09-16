import client from './client';

export const getTest = () => {
  return client.get('/skills')
};

export const getHello = () => {
  return client.get('/skills/hello')
};