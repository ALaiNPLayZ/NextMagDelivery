export const logger = {
  log: (...args: any[]) => console.log('[LOG]', ...args),
  info: (...args: any[]) => console.info('[INFO]', ...args),
  error: (...args: any[]) => console.error('[ERROR]', ...args),
}; 