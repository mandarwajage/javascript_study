function areParenthesesBalanced(expression) {
  const stack = [];
  const openingBrackets = "({[";
  const closingBrackets = ")}]";

  for (let i = 0; i < expression.length; i++) {
      const char = expression[i];

      if (openingBrackets.includes(char)) {
          stack.push(char);
      } else if (closingBrackets.includes(char)) {
          if (stack.length === 0) {
              return false;
          }

          const top = stack.pop();
          const correspondingBracket = openingBrackets[closingBrackets.indexOf(char)];

          if (top !== correspondingBracket) {
              return false;
          }
      }
  }

  return stack.length === 0;
}

// Test cases
console.log(areParenthesesBalanced("({[(){}]})")); // true
console.log(areParenthesesBalanced("({[()]}})")); // false