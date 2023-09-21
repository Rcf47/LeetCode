const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let answer: number;
readline.question("Enter the number: ", (text: string): void => {
  if (isPalindrome(parseInt(text))) {
    console.log(`${text}: is a palindrome`);
  } else {
    console.log(`${text}: is not a palindrome`);
  }
  readline.close();
});
export function isPalindrome(x: number): boolean {
  let numArr = x.toString().split("");
  return JSON.stringify(numArr) === JSON.stringify(numArr.reverse());
}
