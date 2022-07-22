let maxNum = parseInt(prompt("Enter your maximum number: "))
while(!maxNum) {
    maxNum = parseInt(prompt('Enter a valid number'))
}

let targetNum = Math.floor(Math.random() * maxNum )+ 1
let guess = parseInt(prompt("Enter your guess number: "))
let attempts = 0;

while( parseInt(guess) !== targetNum) {
    attempts++
    if (guess==='q') break;
    if (guess>targetNum){
        guess = prompt("Too High. Enter again")
    }else {
        guess = prompt("Too Low. Enter again")
    }
    
}
if(guess === 'q') {
    console.log('Ok, you quit')
}else {
    console.log(`Congratulations! You WIN!!! It took you ${attempts} attempts`)
}
