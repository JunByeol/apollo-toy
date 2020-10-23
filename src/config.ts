import * as dotenv from 'dotenv-safe';

type NODE_ENV_TYPE = 'production' | 'development' | 'test';
export const NODE_ENV: NODE_ENV_TYPE = process.env.NODE_ENV as NODE_ENV_TYPE || 'development';

type ENV_TYPE = 'production' | 'stage' | 'development' | 'test';
export const ENV: ENV_TYPE = NODE_ENV === 'test' ? 'test' : (process.env.ENV as ENV_TYPE || 'development');

if (NODE_ENV !== 'production') {
  dotenv.config({
    allowEmptyValues: true,
    path: `./.env.${NODE_ENV}`,
    sample: `./.env.example.${NODE_ENV}`,
  });
}

