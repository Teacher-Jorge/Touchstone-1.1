let line1 = document.getElementById('line1')
let line2 = document.getElementById('line2')

let btn1_am = document.getElementById('btn1_am')
let btn1_is = document.getElementById('btn1_is')
let btn1_are = document.getElementById('btn1_are')

let btn2_am = document.getElementById('btn2_am')
let btn2_is = document.getElementById('btn2_is')
let btn2_are = document.getElementById('btn2_are')

let btn1_listen = document.getElementById('btn1_listen')
let btn2_listen = document.getElementById('btn2_listen')

let btn1_translate = document.getElementById('btn1_translate')

let click = document.getElementById('click')
let bounce = document.getElementById('bounce')

//LINE 01

btn1_are.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    line1a.textContent = 'are'
    line1a.style.color = "limegreen"
    btn1_are.style.backgroundColor = "limegreen"
    btn1_are.style.color = "yellow"
    btn1_are.style.boxShadow = 'none'
    btn1_are.disabled = 'true'
    btn1_am.disabled = 'true'
    btn1_is.disabled = 'true'
    bounce.play()
})

btn1_am.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    line1a.textContent = 'am'
    line1a.style.color = "red"
    btn1_am.style.backgroundColor = "red"
    btn1_am.style.color = "yellow"
    btn1_am.style.boxShadow = 'none'
    btn1_am.disabled = 'true'
})

btn1_is.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    line1a.textContent = 'is'
    line1a.style.color = "red"
    btn1_is.style.backgroundColor = "red"
    btn1_is.style.color = "yellow"
    btn1_is.style.boxShadow = 'none'
    btn1_is.disabled = 'true'
})

btn1_listen.addEventListener('click', function() {
    click.play()
    let audio = document.getElementById('line1')
    audio.play()
})

btn1_translate.addEventListener('click', function() {
    click.play()
    let translation = document.getElementById('translation')
    translation.textContent = 'Oi, Sarah. Como está você?'
    setTimeout(() => {
        translation.textContent = '_________________________________'
    },3000);
})

//LINE 02

btn2_am.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    line2b.textContent = 'am'
    line2b.style.color = "limegreen"
    btn2_am.style.backgroundColor = "limegreen"
    btn2_am.style.color = "yellow"
    btn2_am.style.boxShadow = 'none'
    btn2_am.disabled = 'true'
    btn2_are.disabled = 'true'
    btn2_is.disabled = 'true'
    bounce.play()
})

btn2_are.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    line2b.textContent = 'are'
    line2b.style.color = "red"
    btn2_are.style.backgroundColor = "red"
    btn2_are.style.color = "yellow"
    btn2_are.style.boxShadow = 'none'
    btn2_are.disabled = 'true'
})

btn2_is.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    line2b.textContent = 'is'
    line2b.style.color = "red"
    btn2_is.style.backgroundColor = "red"
    btn2_is.style.color = "yellow"
    btn2_is.style.boxShadow = 'none'
    btn2_is.disabled = 'true'
})

btn2_listen.addEventListener('click', function() {
    click.play()
    let audio = document.getElementById('line2')
    audio.play()
})

btn2_translate.addEventListener('click', function() {
    click.play()
    let translation = document.getElementById('translation')
    translation.textContent = 'Oi, John. Estou bem. Obrigada. E você?'
    setTimeout(() => {
        translation.textContent = '_________________________________'
    },3000);
})