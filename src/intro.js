// Lesson: Writing your first tests
export function max(a, b) {
  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

// Calculate average of an array of numbers
export function calculateAverage(numbers) {
  if (numbers.length === 0) return NaN;

  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}
