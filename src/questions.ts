type Question = {
  question: string;
  options: string[];
  ans: number;
  time: number,
};

export const questions: Question[] = [
  {
    question: "Which method is used to add an element at the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    ans: 1, 
    time: 30,
  },
  {
    question: "What does the method `array.filter()` do?",
    options: [
      "Filters the array by removing elements that don't match a condition",
      "Maps each element to a new array",
      "Reduces the array to a single value",
      "Sorts the elements of an array",
    ],
    ans: 1, 
    time: 60,
  },
  {
    question: "How can you find the index of an element in an array?",
    options: ["indexOf()", "findIndex()", "includes()", "some()"],
    ans: 2, 
    time: 30,
  },
  {
    question: "What does `array.length` return?",
    options: [
      "The length of each element in the array",
      "The total number of elements in the array",
      "The length of the first element in the array",
      "The length of the last element in the array",
    ],
    ans: 2, 
    time: 30,
  },
  {
    question: "Which method removes the first element from an array?",
    options: ["pop()", "shift()", "splice()", "slice()"],
    ans: 2, 
    time: 30,
  },
  {
    question: "How do you create a new array by combining two existing arrays?",
    options: ["concat()", "join()", "push()", "pop()"],
    ans: 1, 
    time: 30,
  },
  {
    question: "What does `array.map()` return?",
    options: [
      "A new array with the results of applying a function to every element",
      "The original array with modified elements",
      "A single value by reducing the array",
      "The first element that matches a condition",
    ],
    ans: 1, 
    time: 30,
  },
  {
    question: "Which of the following methods creates a shallow copy of an array?",
    options: ["slice()", "splice()", "filter()", "reduce()"],
    ans: 1, 
    time: 30,
  },
  {
    question: "What does `array.reverse()` do?",
    options: [
      "Reverses the order of the elements in the array",
      "Sorts the array in ascending order",
      "Sorts the array in descending order",
      "Removes the first element of the array",
    ],
    ans: 1, 
    time: 30,
  },
  {
    question: "How do you check if an array includes a certain element?",
    options: ["indexOf()", "find()", "includes()", "every()"],
    ans: 3, 
    time: 30,
  },
];
