function greetAndCalculate(name: string, a: number, b: number): string {
    const sum = a + b;
    return `Hello, ${name}! The sum of ${a} and ${b} is ${sum}.`;
}

const usserName: string = "Alice";
const x: number = 10;
const y: number = 20;

const result: string = greetAndCalculate(usserName, x, y);
console.log(result);