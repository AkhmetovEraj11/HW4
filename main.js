// Task1
function gasoline(x, y, z){
    result = Math.floor((x - z) / y)
    console.log(result)
}
// Task2
function mean(x){
    let result = 0
    let j = 0
    for (let i = x;i >= 1;i = Math.floor(i / 10)){
        j++
        result += i % 10
    }
    console.log(Math.floor(result / j))
}
// Task3
function centry(year){
    if (year % 10 == 0){
        year /= 100
    }
    else{
        year = Math.floor(year / 100) + 1
    }
    console.log(year)
}
// Task4
function isFactorial(number){
    let result = 1   
    let j = 0
    for (let i = 1;i <= number;i++){
        result *= i
        j++
    }
}

// Task5
function minNum(a, b, c){
    if (a < b && a < c){
        return a
    }
    else if (b < a && b < c){
        return b
    }
    else{
        return c
    }
}

// Task6
function MinAndMax(a, b, c){
    let min = 0
    let max = 0
    if (a < b && a < c){
        min = a
    }
    else if (b < a && b < c){
        min = b
    }
    else{
        min = c
    }
    (a, b, c){
    if (a > b && a > c){
        max = a
    }
    else if (b > a && b > c){
        max = b
    }
    else{
        max = c
    }
