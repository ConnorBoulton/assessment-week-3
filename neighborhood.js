const innBtn = document.querySelector('#inn')

function randomInn(event){
    const inns = ["The Prancing Pony", "The Green Dragon", "Golden Perch Inn",
    "The Floating Log", "Forsaken Inn", "Ivy Bush"]
    const random = Math.floor(Math.random() * inns.length);
    alert(inns[random])
}

innBtn.addEventListener('click', randomInn)