let ulEl = document.getElementById("ulel");
let  amount = document.getElementById("amount-el")
let car = document.getElementById("first") 
let maw =document.getElementById("second")
let pull = document.getElementById("third") 
let buttons = document.getElementsByTagName("button")
let sumel = document.getElementById("sum")
let btnreset = document.getElementById("invoice")
let arraylist=[
    {Wash:10, Lawn:20, weeds:30}
]
let removearray = [-10,-20,-30]
// -----wash car function------

function Wash(){
     if(car){
     ulEl.innerHTML+=`<li id="removal">Wash Car <span  onclick="deletes()">remove</span> </li>`
     amount.innerHTML+=`<li id="removal1"> $${arraylist[0].Wash}</li>`
    total(arraylist[0].Wash)
     car= ""
 } 
 }
 
//    ------wash car delete function----
 
    function deletes(){
    document.getElementById("removal").remove()
    document.getElementById("removal1").remove()
    Wash()
    car = document.getElementById("first")
    total(removearray[0])
    }
    // -----Mow lawn function------

function Lawn(){
     if(maw){
     ulEl.innerHTML+=`<li id="removal2">Mow Lawn <span onclick="deletes1()">remove</span></li>`
     amount.innerHTML+=`<li id="remove2"> $${arraylist[0].Lawn}</li>`
    total(arraylist[0].Lawn)
     maw = ""
}
}
// -----Mow lawn delete function------
 function deletes1(){
    document.getElementById("removal2").remove()
    document.getElementById("remove2").remove()
    Lawn()
    maw = document.getElementById("second")
    total(removearray[1])
    }
      // -----pull weeds function------
function Weeds(){
     if(pull){
     ulEl.innerHTML+=`<li id="removal3">pull Weeds <span onclick="deletes2()">remove</span></li>`
     amount.innerHTML+=`<li id="remove3"> $${arraylist[0].weeds}</li>`
     total(arraylist[0].weeds)
     pull=""   
}
}

// -----pull weeds delete function------
 function deletes2(){
    document.getElementById("removal3").remove()
    document.getElementById("remove3").remove()
    Weeds()
    pull = document.getElementById("third")
    total(removearray[2])
    }
    let count = 0
 function total(param){
         count+=param
         sumel.innerHTML =count;
     }
btnreset.addEventListener("click", function(){
  ulEl.innerHTML=""
 amount.innerHTML= ""
 car = document.getElementById("first") 
 maw =document.getElementById("second")
 pull = document.getElementById("third") 
 count = 0
 total(0)
})
   