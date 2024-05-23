// console.log("Hello World")

// let arr = [1,2,3,4,5,6,7];
// let x = 3;
// console.log(arr[x])
// for(let k=0; k<arr.length; k++){
//     document.write(`Array is been ${[k]} Itrated ${arr[k]} <br>`)
// }


let Kaf = [10, 20, 34, 76, 32];
let postion = 2;
let newDate = 25;
console.log(Kaf)
for (let i = Kaf.length - 1; i >= 0; i--) {
    // console.log(Kaf[i])
    if (i >= postion) {
        Kaf[i + 1] = Kaf[i]
        if (i == postion) {
            Kaf[i] = newDate
        }
    }
}
console.log(Kaf)

let arr = [10, 20, 3, 5, 9]
let newArr = 27
let position1 = 3

for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= position1) {
        arr[i + 1] = arr[i]
        if (i == position1) {
            arr[i] = newArr
        }
    }
}
console.log(arr)


const amlAbove = 18;
amlAbove > 17 ? console.log(true) : console.log(false)

// const amIAbove = 18;

// if (amIAbove < 17) {
//     console.log(true);
// } else {
//     console.log(false);
// }

function shouldIGetLience(age) {
    if (age > 17) {
        console.log(true);
        return
    }
    console.log(false);
}
shouldIGetLience(14)

function namePrint() {
    let ka = "Kafeel";
    for (let i = 0; i < 3; i++) {
        console.log(ka)
    }
}
namePrint()

let kaif = [1, 2, 3, 4, 5];

let newArr1 = 6;

let Posiarr2 = 5;

for (let i = kaif.length - 1; i >= 0; i--) {
    if (i >= Posiarr2) {

    }
} 
