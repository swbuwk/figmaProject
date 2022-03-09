function showTextOnCursor(text, x, y, color = "#272d4e") {
    let span = document.createElement("span")
    span.classList.add("floating-span")
    span.style.left = `${x-70}px`
    span.style.top = `${y}px`
    span.style.color = color
    span.innerText = text
    document.body.appendChild(span)
    setTimeout(() => {
        document.body.removeChild(span)
    }, 450)
}

document.querySelectorAll("#nav-item").forEach(item => {
    item.onclick = event => showTextOnCursor("NavBar Item!", event.clientX, event.clientY+window.scrollY)
})

document.querySelector(".burger").onclick = event => showTextOnCursor("Sorry, doesn't work", event.clientX, event.clientY+window.scrollY)

document.querySelector("#loginButton").onclick = event => showTextOnCursor("Login!", event.clientX, event.clientY+window.scrollY)
document.querySelector("#regButton").onclick = event => showTextOnCursor("Register!", event.clientX, event.clientY+window.scrollY)
document.querySelector("#searchButton").onclick = event => showTextOnCursor("Search!", event.clientX, event.clientY+window.scrollY)

document.querySelector("#startStoreButton").onclick = event => showTextOnCursor
    (
        "lmao there is actually 2 working buttons", 
        event.clientX, 
        event.clientY+window.scrollY
    )

document.querySelectorAll("#link").forEach(item => {
    item.onclick = event => showTextOnCursor("Link!", event.clientX, event.clientY+window.scrollY)
})

document.querySelectorAll("#documentationButton").forEach(item => {
    item.onclick = event => showTextOnCursor("Documentation!", event.clientX, event.clientY+window.scrollY, "#62a916")
})

document.querySelector("#footerRegButton").onclick = event => showTextOnCursor("Register!", event.clientX, event.clientY+window.scrollY, "white")

document.querySelectorAll(".footer-link").forEach(item => {
    item.onclick = event => showTextOnCursor("Footer Link!", event.clientX, event.clientY+window.scrollY, "#4a2bb8")
})

document.querySelector("#twitter").onclick = event => showTextOnCursor("Twitter!", event.clientX, event.clientY+window.scrollY)
document.querySelector("#facebook").onclick = event => showTextOnCursor("Facebook!", event.clientX, event.clientY+window.scrollY)
document.querySelector("#rss").onclick = event => showTextOnCursor("RSS!", event.clientX, event.clientY+window.scrollY)
document.querySelector("#instagram").onclick = event => showTextOnCursor("Instagram!", event.clientX, event.clientY+window.scrollY)

// SWITCH CARDS hehe love that

let cards = [...document.querySelectorAll(".testimonials-card")]

const arrowLeft = document.querySelector("#switchLeft")
const arrowRight = document.querySelector("#switchRight")

function findCurrent() {
    return cards.findIndex(el => {
        let classList = [...el.classList]
        return classList.includes("current-card")
    })
}

const anims = ["skip2curr", "curr2next", "next2last", "last2hidden"]
const animsBack = ["curr2skip", "next2curr", "last2next", "hidden2last"]

arrowLeft.onclick = () => {
    const currIndex = findCurrent()
    if (!currIndex) return;

    for (let i=0; i<=3; i++) {
        if (cards[currIndex+i-1]) {
            cards[currIndex+i-1].classList.add(anims[i])
        }
    }

    if (currIndex-1 == 0) {
        arrowLeft.classList.add("small-arrow")
    }
    if (currIndex == cards.length-1) {
        arrowRight.classList.remove("small-arrow")
    }

    setTimeout(() => {
        cards.forEach(card => card.classList.remove(...anims))
        if (cards[currIndex-1]) {
            cards[currIndex-1].classList.remove("skipped-card")
            cards[currIndex-1].classList.add("current-card")
        }
    
        cards[currIndex].classList.remove("current-card")
        cards[currIndex].classList.add("next-card")
    
        if (cards[currIndex+1]) {
            cards[currIndex+1].classList.remove("next-card")
            cards[currIndex+1].classList.add("last-card")
        }
    
        if (cards[currIndex+2]) {
            cards[currIndex+2].classList.remove("last-card")
            cards[currIndex+2].classList.add("hidden-card")
        }
    }, 290)
}

arrowRight.onclick = () => {
    const currIndex = findCurrent()
    if (currIndex==cards.length-1) return

    for (let i=0; i<=3; i++) {
        if (cards[currIndex+i]) {
            cards[currIndex+i].classList.add(animsBack[i])
        }
    }

    if (currIndex == 0) {
        arrowLeft.classList.remove("small-arrow")
    }

    if (currIndex+1 == cards.length-1) {
        arrowRight.classList.add("small-arrow")
    }

    setTimeout(() => {
        cards.forEach(card => card.classList.remove(...animsBack))
        cards[currIndex].classList.remove("current-card")
        cards[currIndex].classList.add("skipped-card")

        cards[currIndex+1].classList.remove("next-card")
        cards[currIndex+1].classList.add("current-card")

        if (cards[currIndex+2]) {
            cards[currIndex+2].classList.remove("last-card")
            cards[currIndex+2].classList.add("next-card")
        }

        if (cards[currIndex+3]) {
            cards[currIndex+3].classList.remove("hidden-card")
            cards[currIndex+3].classList.add("last-card")
        }
    }, 290)
}