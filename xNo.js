
     let body = document.querySelector("body");
    let Multi = document.querySelector(".Multi");
    let headOne = document.querySelector("h1");
    let choiceRemove = document.querySelector(".reply");
    let gameGrid = document.querySelector("#gameCon");
    let boxes = Array.from(document.querySelectorAll(".con"));
 
    let Allboxes = document.querySelectorAll(".con");
    let currentPlayer  = "X";
    let gameVer;
   
    let Sub = document.querySelector(".Sub");
    let lastBug = "";
  
let PlayerOne;
let PlayerTwo;
let final;
    
Sub.addEventListener("click", function() {




let PlayOne = document.querySelector(".One").value;
let PlayTwo = document.querySelector(".Two").value;

if(PlayOne !== "" && PlayTwo !== ""){
  
 PlayerOne = PlayOne;
PlayerTwo = PlayTwo; 
headOne.textContent = `${PlayerOne} Turn: X`;
gameGrid.style.display= "Grid";
 final = "Done";
} else {
  headOne.textContent = `Fill in Players Names`;
 
}

});  


function System(value){


   if(value.textContent == "Yes") {
gameVer= 'single';
headOne.textContent = "Lets Goo You Play First";
  Multi.style.display= "none";
      gameGrid.style.display= "Grid";
        document.querySelectorAll(".con").forEach(button => {
          button.textContent = "";})

   }  else {
    gameVer= 'multi';
      Multi.style.display= "Flex";
  document.querySelectorAll(".con").forEach(button => {
          button.textContent = "";})
          headOne.textContent = "";
          currentPlayer = "X";
   }

  document.querySelectorAll(".con").forEach(button => {
 button.addEventListener("click", function(){
    if(button.textContent == ""){
     if(gameVer == 'single'){ 
    button.textContent = "X";
    setTimeout(() => {
    // Computer plays
randomEd(); 

}, 200);
    
  }
    
   else if(gameVer == 'multi' && final === "Done"){
   
       button.textContent = currentPlayer;
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
   
      if(button.textContent === "X"){
      
headOne.textContent = `${PlayerTwo} Turn: O`;
    } else if(button.textContent === "O"){
      
headOne.textContent = `${PlayerOne} Turn: X`;
    }
  
     
      
    } else {
     headOne.textContent = `Fill in players Names`;
    }

    setTimeout(() => {
    // Computer plays
  if (!Win()) {
    CompleteDraw(); // Only run if no winner
  }
}, 500);
  }


  


})
  });

  function randomEd() {
    let hasEmpty = boxes.some(box => box.textContent === "");
      if(hasEmpty) {
      let randomNum =  Math.floor(Math.random() * 9);
      let randomSpace = document.querySelectorAll(".con")[randomNum];
      if(randomSpace.textContent== "" ){
         randomSpace.textContent= "O";
      } else {
        randomEd()
      }
  }
    
}


   const winCombos = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // top-left to bottom-right diagonal
  [2, 4, 6]  // top-right to bottom-left diagonal
];

  function Win(){
 for(let combo of winCombos) {
    let [a, b, c] = combo;
    if (Allboxes[a].textContent &&
     Allboxes[a].textContent === Allboxes[b].textContent &&
      Allboxes[a].textContent === Allboxes[c].textContent) {
     lastBug = "Done";
      Allboxes[a].style.backgroundColor = "black";
      Allboxes[b].style.backgroundColor = "black";
      Allboxes[c].style.backgroundColor = "black";

         if(Allboxes[a].textContent === "X") {
          if(gameVer=="single"){
            headOne.textContent = "You won by Luckkk! 😠";
          } else if(gameVer == "multi") {
             headOne.textContent = `${PlayerOne} Wins`;
          }
          } 
           else if(Allboxes[a].textContent === "O") {
                     if(gameVer=="single"){
             headOne.textContent = "I WONNN😏“That all you got?”";
          } else if(gameVer == "multi") {
             headOne.textContent = `${PlayerTwo} Wins`;
          }
           
           
         }
        
                    setTimeout(() => {
                        lastBug = "";
        Allboxes.forEach(box => {
          box.style.backgroundColor = "";
        box.textContent = "" // reset color
        currentPlayer="X";
         if(gameVer === "single"){
         headOne.textContent = "You Play: X";}
            if(gameVer === "multi"){
         headOne.textContent = `${PlayerOne} Turn: X`;}
        });
        
      }, 1800); 
    
      return true;
    }
  };
}
         
  function CompleteDraw(){
         if ([...Allboxes].every(box => box.textContent !== "")) {
  headOne.textContent = "It's a draw!";
   Allboxes.forEach(box => {
          box.style.backgroundColor = "black";
        })
           setTimeout(() => {
                        lastBug = "";
        Allboxes.forEach(box => {
          box.style.backgroundColor = "";
        box.textContent = "" // reset color
        currentPlayer="X";
        if(gameVer === "single"){
         headOne.textContent = "You Play: X";}
            if(gameVer === "multi"){
         headOne.textContent = `${PlayerOne} Turn: X`;}

        });
        
      }, 2200); 
 
}}




}