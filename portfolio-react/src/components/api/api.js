import client from './client';

export const getSkills = () => {
  return client.get('/skills')
};

export const getHello = () => {
  return client.get('/skills/hello')
};

export const getWorks = () => {
  return client.get('/works')
};