import { stdin, stdout } from "process";

const readline = require("readline").createInterface({
  input: stdin,
  output: stdout,
});

readline.question("Enter roman number: ", (romanString: string) => {
  console.log(`Your number is ${romanToInt(romanString)}`);
  readline.close();
});

export function romanToInt(s: string): number {
  const romanSource = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let value = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    value = romanSource[s[i]];
    if (value < prevValue) {
      result -= value;
    } else {
      result += value;
    }
    prevValue = value;
  }
  return result;
}
