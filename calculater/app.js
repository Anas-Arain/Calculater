    // Function to perform calculations based on user input
    function calculate() {
        var num1 = parseFloat(prompt("Enter the first number:"));
        var operator = prompt("Enter the operator (+, -, *, /):");
        var num2 = parseFloat(prompt("Enter the second number:"));
        var result;

        // Check if input is valid
        if (!isNaN(num1) && !isNaN(num2)) {
            // Perform calculation based on the operator
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        alert("Error: Division by zero.");
                        return;
                    }
                    break;
                default:
                    alert("Invalid operator.");
                    return;
            }
            // Display the result
            alert("Result: " + result);
        } else {
            alert("Invalid input. Please enter valid numbers.");
        }
    }