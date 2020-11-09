import React from 'react';

export default React;
export * from 'react';
export const createContext = jest.fn(() => ({
  Provider: function Provider(props) { return <div {...props} />; },
}));
export const lazy = jest.fn(i => { i(); return 'div'; });
export const Suspense = jest.fn(function Suspense(props) { return <div {...props} />; });
export const useEffect = jest.fn(fn => fn());
export const useState = jest.fn(v => [v, jest.fn()]);