// functions

function add_v(a: number, b: number): void {
  console.log(`The sum of ${a} and ${b} is ${a + b}`);
}

function add(a: number, b: number): number {
  return a + b;
}

function calculate(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number,
) {
  return calcFn(a, b);
}

// custom type
type AddFn = (a: number, b: number) => number;
function calculate1(
  a: number,
  b: number,
  calcFn: AddFn,
) {
  return calcFn(a, b);
}

console.log(add(5, 10));
console.log(calculate(5, 10, add));

console.log(calculate1(5, 20, add));

