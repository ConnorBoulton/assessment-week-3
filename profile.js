const colorBtn = document.querySelector("#color")
const placeBtn = document.querySelector("#place")
const ritualBtn = document.querySelector("#ritual")

function colorAlert(event){
    alert("My favorite color is blue!")    
    document.getElementById("color").style.backgroundColor = "blue";
    document.getElementById("color").style.color = "white";
}


colorBtn.addEventListener('click', colorAlert)

function placeAlert(event){
    alert("I love Lake Powell")
}

placeBtn.addEventListener('click', placeAlert)

function ritualAlert(event){
    alert("I love watching the world cup every 4 years")
}

ritualBtn.addEventListener('click', ritualAlert)