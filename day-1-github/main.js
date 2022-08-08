function Calculator(num1, num2, sign) {
    if (sign === "+"){
        console.log(num1 + num2);
    }
    else if (sign === "-"){
        console.log(num1 - num2);
    }
    else if (sign === "*"){
        console.log(num1 * num2);
    }
    else if (sign === "/"){
        console.log(num1 / num2);
    }
    else if (sign === "%"){
        console.log(num1 / num2 * 100,"%");
    }
}

Calculator(2, 723, '+');
Calculator(228, 70, '-');
Calculator(122, 97, '*');
Calculator(22, 7, '/');
Calculator(587, 600, '%');