const userName = window.location.search.substring(1)

const welcomeMessage = document.querySelector('#welcome')

welcomeMessage.innerHTML += ` ${userName}`

const test = setTimeout(() => {
    window.location.replace('./index.html')
}, 5000);

function extendSession() {
    clearTimeout(test)
}

const button = document.querySelector('#add')

button.addEventListener('click', extendSession)