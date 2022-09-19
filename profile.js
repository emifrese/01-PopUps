const userName = window.location.search.substring(1)
const closeButton = document.querySelector('#close')
const modal = document.querySelector("#modal");
const welcomeMessage = document.querySelector('#welcome')

welcomeMessage.innerHTML += ` ${userName}`

const endSession = setTimeout(() => {
    window.location.replace('./index.html')
}, 5000);

function extendSession() {
    clearTimeout(endSession)
    modal.classList.toggle("display-none")
}

const addButton = document.querySelector('#add')

addButton.addEventListener('click', extendSession)


closeButton.addEventListener('click', () => modal.classList.toggle('display-none'))