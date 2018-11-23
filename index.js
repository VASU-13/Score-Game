var button1 = document.querySelector("#ctr1");
var p1 = document.querySelector("#score1");
var score1=0;

var button2 = document.querySelector("#ctr2");
var p2 = document.querySelector("#score2");
var score2=0;

var reset = document.querySelector("#reset");
var win = document.querySelector("#win");

var l = document.querySelector("#limit").value;
button1.addEventListener("click",function()
{
   var limit = document.querySelector("#limit").value;
  
    score1++
    p1.textContent = score1
    if(score1 === limit || (score1>score2 && score1>limit))
    {
        p1.classList.add("green")
        button1.setAttribute("disabled","true")
        button2.setAttribute("disabled","true")
        printWinner()

    }
})

button2.addEventListener("click",function(){
    var limit = document.querySelector("#limit").value;
    score2++;
    p2.textContent = score2;
    if(score2 === limit || (score2>score1 && score2>limit))
    {
        p2.classList.add("green");
        button1.setAttribute("disabled","true");
        button2.setAttribute("disabled","true");
        printWinner();
    }

})

reset.addEventListener("click",function(){
    button1.removeAttribute("disabled");
    button2.removeAttribute("disabled");
    p1.classList.remove("green");
    p2.classList.remove("green");
    score1=0;
    score2=0;
    p1.textContent = score1;
    p2.textContent = score2;
    document.querySelector("#limit").value = l;
    printWinner.textContent = ""; 



})




function printWinner() 
{
    if(score1>score2)
    {
        win.textContent = "Player 1";
    }
    else{
        win.textContent = "Player 2";
    }
}