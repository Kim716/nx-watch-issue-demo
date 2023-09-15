import { bLib } from '@new-env/b-lib';

export function aLib(): string {
  const b = bLib();

  return 'a-lib' + b;
}
