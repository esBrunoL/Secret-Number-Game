let oldNumbers =[];
let limitNumber = 10;
let secretNumber = generateRandomNumber();
let trys = 1;


function displayText(tag,text){
    let field = document.querySelector(tag)
    field.innerHTML = text
    responsiveVoice.speak(text,'UK English Female',{rate:1.0});
}

function startingText(){
    displayText('h1','The Secret Number Game');
    displayText('p','Pick a number between 1-10');
}

function verifyGuess(){
    let  guess = document.querySelector('input').value;
    if (guess == secretNumber) {
        let tryWord = trys > 1 ?'trys': 'try';
        let tryMessage = `You found the secret number with ${trys} ${tryWord}`;
        displayText('h1','You got it!!');
        displayText('p',tryMessage);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(guess>secretNumber){
            tryMessage =`The secret number is less then ${guess}.`
            displayText('p',tryMessage)
        }
        else{
            tryMessage = `The secret number is greater then ${guess}.`
            displayText('p',tryMessage)
        }
        trys ++;
        cleanSite();
    }
    
    console.log(guess == secretNumber);
}

function generateRandomNumber() {
    let randomNumber = parseInt(Math.random() * limitNumber +1); 

    let totalOldNumbers = oldNumbers.length;
    if(totalOldNumbers==limitNumber){
        oldNumbers=[];
    }

    if(oldNumbers.includes(randomNumber)){
        return generateRandomNumber();
    }else{ 
        oldNumbers.push(randomNumber);
        console.log(oldNumbers);
        return randomNumber;
    }
}

function cleanSite(){
    guess = document.querySelector('input');
    guess.value ='';
}

function newGame(){
    secretNumber = generateRandomNumber();
    trys=1;
    cleanSite();
    startingText();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


startingText();