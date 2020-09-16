function calGPA(x){
    if(100 <= x && x >= 81){
        grade = "A"
    }
    else if(80 <= x && x >= 71){
        grade = "B"
    }
    else if(70 <= x && x >= 61){
        grade = "C"
    }
    else if(60 <= x && x >= 51){
        grade = "D"
    }
    else if(50 <= x && x >= 0){
        grade = "F"
    }
    return grade
}

console.log(calGPA(100))