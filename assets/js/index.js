
// decla
let score = 0.0; //score
let incrementation= 0.0; // c'est la valuer qui va s'ajouter
let multiplier = 100; // multiplicateur de click score
let priceAutoClickerRon = 25;
let priceAutoClickerHermione = 300;
let priceAutoClickerHarry = 1000;
let priceAutoClickerDobby = 2000;
let priceButtonX2 = 50; // prix initial du bouton X2
let priceBonus = 500;// price for bonus

const playPause = document.getElementById('playpause');
playPause.innerHTML = '<img src="./assets/img/soundOn.png" alt="play/pause"/>';
const scoreTitle = document.getElementById("score");
const autoClickerRon = document.getElementById("auto-clicker_ron");
const autoClickerHermione = document.getElementById("auto-clicker_hermione");
const autoClickerHarry = document.getElementById("auto-clicker_harry");
const autoClickerDobby = document.getElementById("auto-clicker_dobby");
const buttonX2 = document.getElementById("buttonX2");
let ronCount = 0;
let harryCount = 0;
let hermioCount = 0;
let dobbyCount = 0;
    // auto-clicker event on ron
    autoClickerRon.addEventListener("click", () =>{
        incrementation += 0.1; // increase the incrementation in the set interval
        minScore(priceAutoClickerRon);
        ronCount += 1;
        // modif the button
        autoClickerRon.children[2].innerHTML = ronCount;
        priceAutoClickerRon = priceAutoClickerRon + (priceAutoClickerRon *0.2);
        autoClickerRon.children[1].children[0].innerHTML = parseInt(priceAutoClickerRon);
        add("ron");
        disabled();
    })

    // autoclick event on hermione 
    autoClickerHermione.addEventListener("click", () =>{
        incrementation += 0.5; // increase the incrementation in the set interval
        minScore(priceAutoClickerHermione);
        hermioCount += 1;
        // modif the button
        autoClickerHermione.children[2].innerHTML = hermioCount;
        priceAutoClickerHermione = priceAutoClickerHermione + (priceAutoClickerHermione *0.2);
        autoClickerHermione.children[1].children[0].innerHTML = parseInt(priceAutoClickerHermione);
        add("hermione");
        disabled();
    })

       // autoclick event on harry 
    autoClickerHarry.addEventListener("click", () =>{
        incrementation += 1; // increase the incrementation in the set interval
        minScore(priceAutoClickerHarry);
        harryCount += 1;
        // modif the button
        autoClickerHarry.children[2].innerHTML = harryCount;
        priceAutoClickerHarry = priceAutoClickerHarry + (priceAutoClickerHarry *0.2);
        autoClickerHarry.children[1].children[0].innerHTML = parseInt(priceAutoClickerHarry);
        add("harry");
        disabled();
    })

        // auto-clicker event on dobby
    autoClickerDobby.addEventListener("click", () =>{
        incrementation += 2; // increase the incrementation in the set interval
        minScore(priceAutoClickerDobby);
        dobbyCount += 1;
        // modif the button
        autoClickerDobby.children[2].innerHTML = dobbyCount;
        priceAutoClickerDobby = priceAutoClickerDobby + (priceAutoClickerDobby *0.2);
        autoClickerDobby.children[1].children[0].innerHTML = parseInt(priceAutoClickerDobby);
        add("dobby");
        disabled();
    })

    // on click
    document.getElementById("click").addEventListener("click", () =>{
        score += multiplier;
        scoreTitle.innerHTML = score.toFixed(1);
    })

    // --------------------------------
    setInterval( () =>{
        score += incrementation;
        scoreTitle.innerHTML = score.toFixed(1);
        disabled();
    }, 100);

    //       -------------------------
    buttonX2.addEventListener("click", () =>{

        minScore(priceButtonX2);
        scoreTitle.innerHTML = score.toFixed(1);
        priceButtonX2 = Math.floor(priceButtonX2 * 3);
        let displayPrice = buttonX2.getElementsByClassName("price"); 
        displayPrice[0].children[0].textContent = priceButtonX2;// changer dans le html
        multiplier = multiplier * 2; 
        
    })
    // -------------------------

    //  bonus x20 on click
        timedCount.addEventListener("click", () =>{
        minScore(priceBonus);
        scoreTitle.innerHTML = score.toFixed(1);
        priceBonus = Math.floor(priceBonus * 5);
        let timeElm = document.getElementById('timedCount');
        let displayPrice = timeElm.getElementsByClassName("price"); 
        displayPrice[0].children[0].textContent = priceBonus;// changer dans le html
        let timeLeft = 15;
        let timerId = setInterval(countdown, 1500);
        multiplier = multiplier * 20;
        
        function countdown(){
            if (timeLeft == 0) {
                clearTimeout(timerId);
                multiplier = multiplier / 20;
                let displayTime = document.getElementsByClassName("clockDown"); 
                displayTime[0].textContent = "";
            } else {
                let displayTime = document.getElementsByClassName("clockDown"); 
                displayTime[0].textContent = timeLeft;
                timeLeft--;
            }
        }  
    });
    // -------------------------------

    //----------------- disabled fct
    function disabled(){    
        let buttonClick = document.querySelectorAll(".clickModif")
        buttonClick.forEach(button =>{
            if (parseInt(button.children[2].innerHTML) < 16){
                if (parseFloat(button.children[1].children[0].innerHTML) <= parseFloat(score)){
                    button.classList.remove("disabled")
                    button.disabled = false;
                }
                else{
                    button.classList.add("disabled")
                    button.disabled = true;
                }
            }
            else{
                button.classList.add("disabled")
                button.disabled = true;
            }
        })
    }
    // ------------------- score min
    function minScore(minus){
        score = score - minus;
    }

    // display avatar
    function add(perso){
        document.getElementById(perso+"Section").innerHTML += '<img src="./assets/img/'+perso +'.png" alt="">';
    }

//----------player sound-----------
window.player = document.getElementById('player');
document.getElementById('playpause').onclick = function () {
    if (player.paused) {
        player.play();
        document.getElementById('playpause').innerHTML = '<img src="./assets/img/soundOn.png" alt="play/pause"/>';
    } else {
        player.pause();
        document.getElementById('playpause').innerHTML = '<img src="./assets/img/soundOff.png" alt="play/pause"/>';
    }
}

