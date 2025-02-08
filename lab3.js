function factorial(digit){
    result = 1;
    
    for(var i = 1; i <= digit; ++i){
        result *= i;
    }

    return result;
}

function median(digit){
    result = 0;
    
    for(var i = 1; i <= digit; ++i){
        result += i;
    }

    return result / digit;
}

var digit = prompt("Введите любое число");
            if(digit % 2 == 0){
                alert(`Факториал числа ${digit}: ${factorial(digit)}`)
            }
            else {
                alert(`Ср. значение ${digit}: ${median(digit)}`)
            }