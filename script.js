let space1 = document.getElementById('space1')
let space2 = document.getElementById('space2')
let space3 = document.getElementById('space3')
let space4 = document.getElementById('space4')
let space5 = document.getElementById('space5')
let space6 = document.getElementById('space6')

let btn1_am = document.getElementById('btn1_am')
let btn1_is = document.getElementById('btn1_is')
let btn1_are = document.getElementById('btn1_are')

let btn2_am = document.getElementById('btn2_am')
let btn2_is = document.getElementById('btn2_is')
let btn2_are = document.getElementById('btn2_are')

let btn3_am = document.getElementById('btn3_am')
let btn3_is = document.getElementById('btn3_is')
let btn3_are = document.getElementById('btn3_are')

let btn4_am = document.getElementById('btn4_am')
let btn4_is = document.getElementById('btn4_is')
let btn4_are = document.getElementById('btn4_are')

let btn5_am = document.getElementById('btn5_am')
let btn5_is = document.getElementById('btn5_is')
let btn5_are = document.getElementById('btn5_are')

let btn6_am = document.getElementById('btn6_am')
let btn6_is = document.getElementById('btn6_is')
let btn6_are = document.getElementById('btn6_are')

let btn1_listen = document.getElementById('btn1_listen')
let btn2_listen = document.getElementById('btn2_listen')
let btn3_listen = document.getElementById('btn3_listen')
let btn4_listen = document.getElementById('btn4_listen')
let btn5_listen = document.getElementById('btn5_listen')
let btn6_listen = document.getElementById('btn6_listen')

let btn1_translate = document.getElementById('btn1_translate')
let btn2_translate = document.getElementById('btn2_translate')
let btn3_translate = document.getElementById('btn3_translate')
let btn4_translate = document.getElementById('btn4_translate')
let btn5_translate = document.getElementById('btn5_translate')
let btn6_translate = document.getElementById('btn6_translate')

let click = document.getElementById('click')
let bounce = document.getElementById('bounce')

//LINE 01

btn1_are.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    space1.textContent = 'are'
    space1.style.color = "limegreen"
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
    space1.textContent = 'am'
    space1.style.color = "red"
    btn1_am.style.backgroundColor = "red"
    btn1_am.style.color = "yellow"
    btn1_am.style.boxShadow = 'none'
    btn1_am.disabled = 'true'
})

btn1_is.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    space1.textContent = 'is'
    space1.style.color = "red"
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
    space2.textContent = 'am'
    space2.style.color = "limegreen"
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
    space2.textContent = 'are'
    space2.style.color = "red"
    btn2_are.style.backgroundColor = "red"
    btn2_are.style.color = "yellow"
    btn2_are.style.boxShadow = 'none'
    btn2_are.disabled = 'true'
})

btn2_is.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    space2.textContent = 'is'
    space2.style.color = "red"
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
    translation.textContent = 'Oi, John. Estou bem, obrigada. E você?'
    setTimeout(() => {
        translation.textContent = '_________________________________'
    },3000);
})

//LINE 03

btn3_am.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    space3.textContent = "'m"
    space3.style.color = "limegreen"
    btn3_am.style.backgroundColor = "limegreen"
    btn3_am.style.color = "yellow"
    btn3_am.style.boxShadow = 'none'
    btn3_am.disabled = 'true'
    btn3_are.disabled = 'true'
    btn3_is.disabled = 'true'
    bounce.play()
})

btn3_are.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    space3.textContent = "'re"
    space3.style.color = "red"
    btn3_are.style.backgroundColor = "red"
    btn3_are.style.color = "yellow"
    btn3_are.style.boxShadow = 'none'
    btn3_are.disabled = 'true'
})

btn3_is.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    space3.textContent = "'s"
    space3.style.color = "red"
    btn3_is.style.backgroundColor = "red"
    btn3_is.style.color = "yellow"
    btn3_is.style.boxShadow = 'none'
    btn3_is.disabled = 'true'
})

btn3_listen.addEventListener('click', function() {
    click.play()
    let audio = document.getElementById('line3')
    audio.play()
})

btn3_translate.addEventListener('click', function() {
    click.play()
    let translation = document.getElementById('translation')
    translation.textContent = 'Estou bem.'
    setTimeout(() => {
        translation.textContent = '_________________________________'
    },3000);
})


//LINE 04

btn4_is.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    space4.textContent = "Is"
    space4.style.color = "limegreen"
    btn4_is.style.backgroundColor = "limegreen"
    btn4_is.style.color = "yellow"
    btn4_is.style.boxShadow = 'none'
    btn4_is.disabled = 'true'
    btn4_are.disabled = 'true'
    btn4_am.disabled = 'true'
    bounce.play()
})

btn4_are.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    space4.textContent = "Are"
    space4.style.color = "red"
    btn4_are.style.backgroundColor = "red"
    btn4_are.style.color = "yellow"
    btn4_are.style.boxShadow = 'none'
    btn4_are.disabled = 'true'
})

btn4_am.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    space4.textContent = "Am"
    space4.style.color = "red"
    btn4_am.style.backgroundColor = "red"
    btn4_am.style.color = "yellow"
    btn4_am.style.boxShadow = 'none'
    btn4_am.disabled = 'true'
})

btn4_listen.addEventListener('click', function() {
    click.play()
    let audio = document.getElementById('line4')
    audio.play()
})

btn4_translate.addEventListener('click', function() {
    click.play()
    let translation = document.getElementById('translation')
    translation.textContent = 'Seu teste é hoje?'
    setTimeout(() => {
        translation.textContent = '_________________________________'
    },3000);
})


//LINE 05

btn5_am.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    space5.textContent = "am"
    space5.style.color = "limegreen"
    btn5_am.style.backgroundColor = "limegreen"
    btn5_am.style.color = "yellow"
    btn5_am.style.boxShadow = 'none'
    btn5_am.disabled = 'true'
    btn5_are.disabled = 'true'
    btn5_is.disabled = 'true'
    bounce.play()
})

btn5_are.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    space5.textContent = "are"
    space5.style.color = "red"
    btn5_are.style.backgroundColor = "red"
    btn5_are.style.color = "yellow"
    btn5_are.style.boxShadow = 'none'
    btn5_are.disabled = 'true'
})

btn5_is.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    space5.textContent = "is"
    space5.style.color = "red"
    btn5_is.style.backgroundColor = "red"
    btn5_is.style.color = "yellow"
    btn5_is.style.boxShadow = 'none'
    btn5_is.disabled = 'true'
})

btn5_listen.addEventListener('click', function() {
    click.play()
    let audio = document.getElementById('line5')
    audio.play()
})

btn5_translate.addEventListener('click', function() {
    click.play()
    let translation = document.getElementById('translation')
    translation.textContent = 'Sim, e eu estou um pouco tensa.'
    setTimeout(() => {
        translation.textContent = '_________________________________'
    },3000);
})

//LINE 06

btn6_is.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    space6.textContent = "'s"
    space6.style.color = "limegreen"
    btn6_is.style.backgroundColor = "limegreen"
    btn6_is.style.color = "yellow"
    btn6_is.style.boxShadow = 'none'
    btn6_is.disabled = 'true'
    btn6_are.disabled = 'true'
    btn6_am.disabled = 'true'
    bounce.play()
})

btn6_are.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    space6.textContent = "'re"
    space6.style.color = "red"
    btn6_are.style.backgroundColor = "red"
    btn6_are.style.color = "yellow"
    btn6_are.style.boxShadow = 'none'
    btn6_are.disabled = 'true'
})

btn6_am.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    space6.textContent = "'m"
    space6.style.color = "red"
    btn6_am.style.backgroundColor = "red"
    btn6_am.style.color = "yellow"
    btn6_am.style.boxShadow = 'none'
    btn6_am.disabled = 'true'
})

btn6_listen.addEventListener('click', function() {
    click.play()
    let audio = document.getElementById('line6')
    audio.play()
})

btn6_translate.addEventListener('click', function() {
    click.play()
    let translation = document.getElementById('translation')
    translation.textContent = "Não se preocupe. Vai dar tudo certo!"
    setTimeout(() => {
        translation.textContent = '_________________________________'
    },3000);
})


