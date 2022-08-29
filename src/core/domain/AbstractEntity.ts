import crypto from 'crypto';

class AbstractEntity<T> {
  readonly id: string;

  constructor(public props: T, id?: string) {
    this.id = id ?? crypto.randomUUID();
  };
};

export { AbstractEntity };
