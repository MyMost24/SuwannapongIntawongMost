
// 1.
console.log("Number 1")

for (let i=1 ; i<=20 ; i += 1){
        console.log(i)
    }

// 2.

console.log("Number 2")
    
for (let i=1 ; i<=20 ; i++){
        if(i%2 == 0)
        console.log(i)
        // console.log(i%2 === 0 ? 1 :"")
    }

// 3.

console.log("Number 3")

let number = [-1,2,3,56,6,-93,0,4].map(el => el*2)
console.log(number)

// 4.

console.log("Number 4")

let result = [10,13,44,55,89,0,12,1].filter(el => el%2 == 0)
console.log(result)