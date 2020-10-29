// 1 concat('Hello ', 'World')
type ConcatFnType = (str1: string, str2: string) => string;

// 2

interface MyHomeTaskInterface {
  howIDoIt: string;
  simeArray: Array<string | number>;
  withData?: Array<MyHomeTaskInterface>;
}

const MyHometask: MyHomeTaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

// 3

interface MyArray<T> {
  [N: number]: T;

  reduce<U>(fn: (acc: U, current: T) => U, val: U): U;
}
