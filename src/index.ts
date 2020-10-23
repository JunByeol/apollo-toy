import { helloWorld } from '~/src/string';
import * as env from '~/src/config';

console.log(`${helloWorld}: ${env.NODE_ENV}`);
