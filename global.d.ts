declare namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      HOST: string;
      JWT_KEY: string;
    }
  }