// https://bobbyhadz.com/blog/typescript-process-env-type
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: 'test' | 'dev' | 'prod';
      MONGODB_URI: string;
    }
  }
}
