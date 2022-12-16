function initGame(){

var ItemCount=12; //12 yada 16
var couponCode="BarısUmutYusuf";
var libHTML= document.createElement("html");
libHTML.innerHTML=` <link rel="stylesheet prefetch" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
<link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Coda">
`;
document.head.append(libHTML);
var style = document.createElement("style");
style.innerHTML =`
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.deck {
    width: 660px;
    min-height: 680px;
    background: gray;
    padding: 32px;
    border-radius: 10px;
    box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 3em;
}

.deck .card {
    height: 125px;
    width: 125px;
    background: #2e3d49;
    font-size: 0;
    color: #ffffff;
    border-radius: 8px;
    cursor: pointer;
    display: flex !important;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);
}

.deck .card.open {
    transform: rotateY(0);
    background: white;
    cursor: default;
    color: black;
}

.deck .card.show {
    font-size: 55px;
}

.deck .card.match {
    cursor: default;
    background: lightgreen;
    font-size: 55px;
    color: black;
}

.score-panel {
    text-align: left;
    width: 345px;
    margin-bottom: 10px;
}

.score-panel .stars {
    margin: 0;
    padding: 0;
    display: inline-block;
    margin: 0 5px 0 0;
}

.score-panel .stars li {
    list-style: none;
    display: inline-block;
}

.score-panel .restart {
    float: right;
    cursor: pointer;
}

.name_box {
    position: absolute;
    box-shadow: 0 0 1000px 1000px #00000099;
    width:24vw;
    top:20vh;
    left:38vw;
    background: #fff;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    border: 5px solid #02ccba;
    z-index: 10;
}

.name_box h3 {
    margin: 0 0 10px;
}

.name_box input {
    font-size: 20px;
    width: 100%;
    padding: 10px;
    font-family: 'Coda', cursive;
    margin-bottom: 15px;
}

.name_box button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background: #02ccba;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
}

.lead_button, .playAgain {
    border: 0;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    margin: 5px;
}
.playAgain {
    font-size: 16px;
    font-family: inherit;
    background: #416dea;
    border-bottom:3px solid #183eb9;
    padding: 10px 15px;
}
.lead_button {
    border-bottom:3px solid #ab1834; 
    background: #F32C52;
    padding: 10px;
}
.leaderboard {
    background: linear-gradient(160deg, #02ccba 0%, #aa7ecd 100%);
    display: initial;
    background-attachment: fixed;
}
.leaderboard table {
    width: 70%;
    margin: 5% auto 20px;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    border-collapse: collapse;
    text-align: center;
    box-shadow: 0px 0px 25px 5px #00000033;
    overflow: hidden;
}
.leaderboard tr td {
    padding: 10px;
    border-bottom: 1px solid rgba(0,0,0, 0.3);
}
.leaderboard tr th {
    background: #3860e2;
    color: #fff;
    padding: 10px;
}

.leaderboard tr th h2 {margin:0;}
.leaderboard .playAgain {margin:20px 20px; display:block; width:fit-content;}

@media screen and (min-width:768px) and (max-width:1024px) {
    .name_box {width: 50vw; left:25vw;}
}

@media screen and (min-width:481px) and (max-width:767px) {
    .name_box {width: 50vw; left:25vw;}
    .deck .card.match { font-size: 45px;}
}

@media screen and (min-width:320px) and (max-width:480px) {
    .vl-popup{width:100%}
    .name_box {width: 80vw; left:10vw;}
    .score-panel {width: 100%; padding: 0 20px;}
    .deck {width: 90%; min-height: 300px; padding: 20px;}
    .deck .card {width: 17vw; height: 17vw; margin-bottom: 15px;}
    .deck .card.show {font-size: 20px;}
    .leaderboard table {width: 90%;}
    .deck .card.match { font-size: 40px;}
}
`;
document.head.append(style);

const config = {
    desktopWidth: "500px",
    mobileWidth: "320px",
  };
  FirePopup(); 
  function FirePopup() {
    if (!document.querySelector(".vl-popup-container")) {
      var style = document.createElement("style");
      style.innerHTML = `
          .vl-popup-container{
            z-index: 10000;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
          }
          .vl-popup-overlay{
            z-index: 10000;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.8;
            position: fixed;
            top: 0;
            left: 0;
          }
          .vl-popup{
            position:absolute;
            z-index:100001;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
          }
  
          .vl-popup-close{
            position: absolute;
            right: 5px;
            top: 5px;
            cursor: pointer;
            z-index: 100002;
            width:25px;
            height:25px;       
          }
          .vl_win_header{
            font-size:60px; 
            font-weight:900;
          }
          .vl_win_body{
            font-size:30px;
          }
          .vl_win_code{
            font-size:20px; 
            font-weight:bold;
          }
          @media only screen and (max-width: 768px) {
            .vl-popup-close{
              font-size: 15px;
              line-height: 15px;
            }
            .vl_win_header{
                font-size:30px; 
              }
              .vl_win_body{
                font-size:14px;
              }
              .vl_win_code{
                font-size: 20px;
                text-align: center;
              }
          }
      `;
      document.head.append(style);
  
      var div = document.createElement("div");
      div.setAttribute("class", "vl-popup-container");
      div.innerHTML = `
          <div class="vl-popup-overlay"></div> 
          <div class="vl-popup">
          <div class="container">

          <section class="score-panel">
              <ul class="stars">
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              </ul>
      
              <span class="moves">3</span> Moves
      
              <span class="timer"></span>    
      
              <div class="restart">
                  <i class="fa fa-repeat"></i>
              </div>
          </section>
      
          <ul class="deck"></ul>
      </div>
          </div>
      `;
      document.body.append(div);
  
      document.querySelector(".vl-popup-overlay").addEventListener("click", closePopup);

  
      function closePopup() {
        document.querySelector(".vl-popup-container").remove();
      }
  
    }
  }

let cards;
if(ItemCount==12){

    cards = ["paper-plane-o","anchor","bolt","anchor","leaf","bicycle","bomb","leaf","bomb","bolt","bicycle","paper-plane-o"];
}
else if (ItemCount==16)
{

    cards = ["diamond","paper-plane-o","anchor","bolt","cube","anchor","leaf","bicycle","diamond","bomb","leaf","bomb","bolt","bicycle","paper-plane-o","cube"];
}
       
       const VLmodal = document.querySelector(".modal");
       const modalText = document.querySelector(".modalText");
       const playAgain = document.querySelector(".playAgain");
       
       const stars = document.querySelector(".stars");
       const moves = document.querySelector(".moves");
       let timer = document.querySelector(".timer");
       const restart = document.querySelector(".restart");
       const deck = document.querySelector(".deck");
       
       let interval;
       let second = 0;
       let minute = 0;
      // let timeStart = false;
       
       let cards_select = [];
       let matches = 0;
       let movesCount = moves.textContent;
       let starsCount = 3;
       let movesWait = false;
       
       
       function newGame() {
       
           resetTimer();
           deck.innerHTML = '';
           timer.style.display = "none";
           //timeStart = false;
           timer.textContent = minute + ' Minutes ' + second + ' Seconds';
           shuffle(cards);
           cards_select = [];
           matches = 0;
           moves.textContent = 0;
           movesCount = moves.textContent;
       
           for(let i = 0; i < cards.length; i++) {
            console.log("Tuğçe"+i);
               deck.insertAdjacentHTML('afterbegin', '<li class="card"><i class="fa fa-' + cards[i] +' "></i></li>');
           }
       
           stars.innerHTML = '<li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li>';
           starsCount = 3;
       }
       
       
       function flipCard(card) {
           card.classList.add("open", "show");
       }
       
       
       function cardMatch() {
           cards_select[0].classList.remove("open", "show");
           cards_select[0].classList.add("match");
           cards_select[1].classList.remove("open", "show");
           cards_select[1].classList.add("match");
           cards_select = [];
           matches++;
           console.log(matches);
       }
       
       
       function cardMisMatch() {
           setTimeout(function() {
               cards_select[0].classList.remove("open", "show");
               cards_select[1].classList.remove("open", "show");
               cards_select = [];
           movesWait = true;
           }, 500);
       }
       
        
       function addMove(card) {
           if(!card.classList.contains("match")) {
               movesCount++;
               moves.innerText = movesCount;
           }
       }
       
       
       function endGame() {
           if(movesCount <= 14) {
               starsCount = 5;
           } else if (movesCount <= 19) {
               starsCount = 4;
           } else if (movesCount <= 22) {
               starsCount = 3;
           } else {
               starsCount = 2;
           }
       
           if(matches === ItemCount/2) {
               document.querySelector(".vl-popup")
               //VLmodal.style.display = "block";
               document.querySelector(".vl-popup > div >ul").innerHTML=`<p class="vl_win_header">Tebrikler! &#11088;</p>
               <p class="vl_win_body">${ItemCount} adet kartı ${movesCount} hamlede buldun. </p> 
               <p class="vl_win_code">Kupon Kodun :<b> ${couponCode} </b></p>`;
               document.querySelector(".vl-popup > div >ul").style.flexDirection="column";
               document.querySelector(".vl-popup > div >ul").style.justifyContent="center";
               //Cong ekranı fonksiyonunu çağır.

           }
       }
       
       restart.addEventListener("click", function() {
           newGame();
       });
       
       if (!movesWait) {
       deck.addEventListener("click", function(e) {
           let card = e.target;
       
           if(e.target !== e.currentTarget) {
            //    if(!timeStart) {
            //        startTimer();
            //        timeStart = true;
            //        timer.style.display = "inline-block";
            //    }
               if(!card.classList.contains("open")) {
                   if(cards_select.length < 2) {
                       flipCard(card);
                       cards_select.push(card);
                   }
                   if(cards_select.length === 2) {
                       addMove(card);
                       if(cards_select[0].innerHTML === cards_select[1].innerHTML) {
                           cardMatch();
                       } else {
                           cardMisMatch();
                       }
                   }
                   endGame();
               }
           }
       });
       }
       
       function resetTimer() {
           clearInterval(interval);
           second = 0;
           minute = 0;
       }   
       
       function startTimer() {
           interval = setInterval(function() {
               timer.textContent = minute + " minutes " + second + " seconds ";
               second++;
               if (second === 60) {
                   minute++;
                   second = 0;
               }
           }, 1000)
       }
       
       function shuffle(array) {
           var currentIndex = array.length, temporaryValue, randomIndex;
       
           while (currentIndex !== 0) {
               randomIndex = Math.floor(Math.random() * currentIndex);
               currentIndex -= 1;
               temporaryValue = array[currentIndex];
               array[currentIndex] = array[randomIndex];
               array[randomIndex] = temporaryValue;
           }
       
           return array;
       }
       
       newGame();

           
}
initGame();