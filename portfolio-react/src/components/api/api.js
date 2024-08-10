import client from './client';

export const getTest = () => {
  return client.get('/skills')
};


export default getTest;
