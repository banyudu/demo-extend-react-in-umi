import 'react';

declare module 'react' {
  interface FunctionComponent<P = {}> {
    'data-test-id'?: string;
  }
}
