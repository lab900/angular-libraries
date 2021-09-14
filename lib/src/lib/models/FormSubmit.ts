export interface FormSubmit<T> {
  readonly id?: number;
  readonly type: 'new' | 'change';
  readonly data: T;
}
