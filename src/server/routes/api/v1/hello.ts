import { eventHandler } from 'h3';

export default eventHandler(() => {
  return {
    message: 'Hello World'
  };
})