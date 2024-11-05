const calculate = (operator, num1, num2) => {
                switch (operator) {
                    case '+':
                        return num1 + num2;
                    case '-':
                        return num1 - num2;
                    case '*':
                        return num1 * num2;
                    case '/':
                        return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero!';
                    default:
                        return 'Invalid operator';
                }
            }
            let operator = prompt('Choose an operator [+, -, *, /]');
            let num1 = parseFloat(prompt('Type your first value'));
            let num2 = parseFloat(prompt('Type your second value'));
            let result = calculate(operator, num1, num2);

            document.getElementById("result").innerHTML = `Result: ${result}`;




