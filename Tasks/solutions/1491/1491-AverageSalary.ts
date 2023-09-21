export function average(salary: number[]): number {
  let max: number = Math.max(...salary)
  let min: number = Math.min(...salary)
  let newSalary = salary.filter(item => { return item !== max })
  newSalary = newSalary.filter(item => { return item !== min })
  let sumOfNewSalary = newSalary.reduce((acc, item) => acc + item, 0)
  return sumOfNewSalary / newSalary.length
}

