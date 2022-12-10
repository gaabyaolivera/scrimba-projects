let countHome = 0
let countGuest = 0

let home = document.getElementById("home")
let guest = document.getElementById("guest")

// home

function addOneHome(){
    countHome += 1
    home.textContent = countHome
}

function addDoisHome(){
    countHome += 2
    home.textContent = countHome
}

function addTresHome(){
    countHome += 3
    home.textContent = countHome
}

// guest
function addOneGuest(){
    countGuest += 1
    guest.textContent = countGuest
}

function addDoisGuest(){
    countGuest += 2
    guest.textContent = countGuest
}

function addTresGuest(){
    countGuest += 3
    guest.textContent = countGuest
}