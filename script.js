trustPage();
function trustPage(){
    document.querySelector('.mainFooter').style.display = "none";

    let yes = document.querySelector('.yes');
    let no = document.querySelector('.no');

    yes.addEventListener('click', () => {
        document.querySelector('.trust').style.display = "none"
        document.querySelector('.mainPage').style.display = "grid"
        mainPage();
    });

    no.addEventListener('click', () => {
        const scream = new Audio('a-screaming.wav');
        scream.play();
        setTimeout(()=>{
            document.querySelector('.trust').style.display = "none";
            document.querySelector('.dead-container').style.display = "grid";
        }, 100);

        setTimeout(()=>{
            document.querySelector('.trust').style.display = "grid";
            document.querySelector('.dead-container').style.display = "none";
        }, 4000);
    });
}


function mainPage(){
    document.querySelector('.trust').style.display = "none"
    document.querySelector('.mainPage').style.display = "grid"

    let heartBeat = new Audio('a-heartbeat.wav');
    heartBeat.play();
    let name = document.getElementById("name");
    let submitName = document.getElementById("submitName");
    submitName.addEventListener('click', () => {
        if(name.value == ""){
            name.style.animationDuration = ".3s";
            name.style.animationName = "borderRed"
        }
        else{
            heartBeat.pause();
            document.querySelector('.mainFooter').style.display = "flex";
            nextPage();
        }
    })
}

let levelIndex = 1;
function nextPage(){
    switch(levelIndex){
        case 1: 
            document.querySelector('.mainPage').style.display = "none"
            document.querySelector('.blue-red-buttons').style.display = "grid";
            blueRedButtons(); 
            break;
        case 2: 
            document.querySelector('.blue-red-buttons').style.display = "none";
            document.querySelector('.horse').style.display = "grid";
            horse(); 
            break;
        case 3: 
            document.querySelector('.horse').style.display = "none";
            document.querySelector('.ans-in-question').style.display = "grid";
            ansInQuestion(); 
            break;
        case 4: 
            document.querySelector('.ans-in-question').style.display = "none";
            document.querySelector('.spot-diff-image').style.display = "grid";
            spotDiffImage(); 
            break;
        case 5: 
            document.querySelector('.spot-diff-image').style.display = "none";
            document.querySelector('.click-by-order').style.display = "grid";
            clickByOrder(); 
            break;
        case 6: 
            document.querySelector('.click-by-order').style.display = "none";
            document.querySelector('.letter-alphabet').style.display = "grid";
            letterAlphabet(); 
            break;
            
        
            

        default: 
            console.log("Index value error");
            document.querySelector('.letter-alphabet').style.display = "none";   // last task page
            document.querySelector('.mainFooter').style.display = "none";
            document.querySelector('.scorePage').style.display = "grid";
    }
    levelIndex++;
}


skip();
function skip(){
    let skip = document.getElementById('skip');
    skip.addEventListener('click', () => {
        nextPage();
        laughSound();
    })
}

let lives = 5;
function changeLives(){
    
    lives--;

    if(lives >= 1){
        document.getElementById('livesCounter').innerHTML = lives;
        document.getElementById(`heart${lives+1}`).style.display = "none";
    }
    else{ // Eliminated
        document.querySelector('.mainFooter').style.display = "none";


        document.querySelector('.eliminated').style.display = "grid";
        let knifeSound = new Audio('a-knife.mp3');
        knifeSound.play();
        let deadScream = new Audio('a-deadScream.mp3');
        deadScream.play();

        document.querySelector('.mainFooter').style.display = "none";
        document.querySelector('.mainPage').style.display = "none"
        document.querySelector('.blue-red-buttons').style.display = "none";
        document.querySelector('.horse').style.display = "none";
        document.querySelector('.letter-alphabet').style.display = "none";
        document.querySelector('.ans-in-question').style.display = "none";
        document.querySelector('.spot-diff-image').style.display = "none";
        document.querySelector('.click-by-order').style.display = "none";

        setTimeout(()=> {
            document.querySelector('.eliminated').style.display = "none";
            document.querySelector('.eliminatedImage').style.display = "none";
            document.querySelector('.scorePage').style.display = "grid";
        }, 2000);

    }
}

function outPage(className){
    console.log(className);
    changeLives();

    if(lives >= 1){
        let scream = new Audio('a-screaming.wav');
        scream.play();
        document.querySelector('.mainFooter').style.display = "none";
    
        setTimeout(() => {
            document.querySelector(className).style.display = "none"
            document.querySelector('.out').style.display = "grid";
        }, 100);
    
        setTimeout(() => {
            document.querySelector('.out').style.display = "none";
            document.querySelector(className).style.display = "grid"
            document.querySelector('.mainFooter').style.display = "flex";
        }, 3000);
    }
}


function winSound(){
    let winSound = new Audio('a-win.mp3');
    winSound.play();
}
function laughSound(){
    let laugh = new Audio('a-laugh.mp3');
    laugh.play();
}


function blueRedButtons(){
    let Buttoncounter = 1;
    let blueCounter = document.getElementById("blueCounter");
    let blueButton = document.getElementById("blueButton");
    let redButton = document.getElementById("redButton");
    blueButton.addEventListener('click', () => {
        if(Buttoncounter == 12){
            document.getElementById("blueCounter").innerHTML = "";
            Buttoncounter = 1;
            outPage('.blue-red-buttons');

        }
        else{
            if(Buttoncounter == 7){
                Buttoncounter++;
            }
            blueCounter.innerHTML = Buttoncounter;
            Buttoncounter++;
        }
    })
    redButton.addEventListener('click', () => {
        if(Buttoncounter == 12){  // 11
            winSound();
            nextPage();
        }
        else{
            document.getElementById("blueCounter").innerHTML = "";
            Buttoncounter = 1;
            outPage('.blue-red-buttons');
        }
    });
}



function horse(){
    let letters = document.querySelectorAll('.letters');
    let horseAnswer = document.querySelector('.horseAnswer');
    let index = 1;
    letters.forEach((letter) => {
        letter.addEventListener('click', () => {
            if(index == 1 && letter.innerHTML == "H"){
                horseAnswer.innerHTML = 'H';
                index++;
            }
            else if(index == 2 && letter.innerHTML == "O"){
                horseAnswer.innerHTML = 'HO';
                index++;
            }
            else if(index == 3 && letter.innerHTML == "R"){
                horseAnswer.innerHTML = 'HOR';
                index++;
            }
            else if(index == 4 && letter.innerHTML == "S"){
                horseAnswer.innerHTML = 'HORS';
                index++;
            }
            else if(index == 5 && letter.innerHTML == "E"){
                horseAnswer.innerHTML = 'HORSE';
                index++;
                winSound();
                nextPage();
            }
            else{
                index = 1;
                horseAnswer.innerHTML = '.';
                outPage('.horse');
            }
        })
    })
}



function letterAlphabet(){
    let options = document.querySelectorAll('.optionAlpha');
    options.forEach((option) => {
        option.addEventListener('click', () => {
            if(option.innerHTML == 'H'){
                winSound();
                nextPage();
            }
            else{
                outPage('.letter-alphabet');
            }
        })
    })
}


function spotDiffImage(){
    let minusBtn = document.getElementById("minusBtn");
    let counterElement = document.getElementById("counter");
    let plusBtn = document.getElementById("plusBtn");
    let submitBtn = document.getElementById("submitBtn");
    let counter = 0;

    plusBtn.addEventListener('click', () => {
        counter++;
        counterElement.innerHTML = counter;
    })
    
    minusBtn.addEventListener('click', () => {
        if((counter-1) >= 0){
            counter--;
            counterElement.innerHTML = counter;
        }
    })

    submitBtn.addEventListener('click', () => {
        if(counter == 0){
            winSound();
            nextPage();
        }
        else{
            counter = 0;
            counterElement.innerHTML = counter;
            outPage('.spot-diff-image');
        }
    })
}




function clickByOrder(){
    let numbers = document.querySelectorAll(".numbers");
    let order = [49, 80, 5, 101, 7, 11];
    let index = 0;
    
    numbers.forEach((number) => {
        number.addEventListener('click', () => {

            number.style.display = "none";
            document.querySelector('.questionNum').style.color = "transparent";

            if(checkGuess(number.innerHTML) == true){
                // 1 number guessed right 

                if(index == order.length){
                    winSound();
                    nextPage();
                }
            }
            else{
                index = 0;
                document.querySelector('.questionNum').style.color = "black";
                numbers.forEach((number) => {
                    number.style.display = "block";
                })
                outPage('.click-by-order');
            }
        })
    })

    function checkGuess(number){
        if(number == order[index]){
            index++;
            return true;
        }
        else{
            false;
        }
    }
}



function ansInQuestion(){

    let three = document.getElementById('three');
    let options = document.querySelectorAll('.options');

    three.addEventListener('click', () => {
        winSound();
        nextPage();
    })

    options.forEach((option) => {
        option.addEventListener('click', () => {
            outPage('.ans-in-question');
        })
    })
}
