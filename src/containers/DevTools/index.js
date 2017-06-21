
const prod = process.env.NODE_ENV === 'production';

const DevTools = prod
  ? require('./DevTools.prod').default
  : require('./DevTools.dev').default;

export default DevTools;
