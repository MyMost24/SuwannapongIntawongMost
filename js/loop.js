

let temp = ['apple','banana','Kiwi']

temp.forEach((element,idx) => {
    console.log(idx ,element)
})

let newValue = temp.map((element, idx) => {
    return `${idx+1}.${element}`
}) 
console.log(newValue)

let filterMoreThanZero = [-1,2,3,56,-6,-45,0,4].filter(el => el >= 0)
console.log(filterMoreThanZero)

