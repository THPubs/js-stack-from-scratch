// @flow

// eslint-disable-next-line import/prefer-default-export
export const helloEndPointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`
