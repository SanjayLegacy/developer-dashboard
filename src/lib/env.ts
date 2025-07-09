const ENV = import.meta.env;

/** The App environment */
export type Environment = "dev" | "prod" | "qa";
export const APP_ENV: Environment = ENV.VITE_APP_ENV || "dev";

// Firebase config
export const API_KEY = ENV.VITE_API_KEY;
export const AUTH_DOMAIN = ENV.VITE_AUTH_DOMAIN;
export const PROJECT_ID = ENV.VITE_PROJECT_ID;
export const STORAGE_BUCKET = ENV.VITE_STORAGE_BUCKET;
export const MESSAGING_SENDER_ID = ENV.VITE_MESSAGING_SENDER_ID;
export const APP_ID = ENV.VITE_APP_ID;
export const MEASUREMENT_ID = ENV.VITE_MEASUREMENT_ID;
