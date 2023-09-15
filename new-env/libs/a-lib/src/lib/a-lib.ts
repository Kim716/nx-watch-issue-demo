import { bLib } from '../../../b-lib/src';

export function aLib(): string {
  const b = bLib();

  return 'a-lib' + b;
}
