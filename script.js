const promptCross = document.querySelector('.lock__close')
const prompt = document.querySelector('.lock')
const submit = document.querySelector('.form__button')
const circle_1 = document.querySelector('.step__circle--1')
const blueCircle = '<img src="img/circle-blue.svg" alt="circle-blue">'
const stepLine = document.querySelector('.step__line--1')
const blueLine = '<img src="img/blue-line.svg" alt="line-blue">'
const numberInput= document.querySelector('.form__num--input')
const stepContent2 = document.querySelector('.content__step-2')
const errorFormInput = document.querySelector('.text__error')
function closePrompt() {
    prompt.style.display = 'none'
}
promptCross.onclick = closePrompt


function getNewStepCircle() {
    circle_1.innerHTML = blueCircle
}
function getNewStepLine() {
    stepLine.innerHTML = blueLine
}
function getNewStepContent() {
    stepContent2.style.display = 'inline'
}
function randomCode() {
    alert(Math.floor(1000 + Math.random() * 9000))
}

submit.onclick = function () {
    if (numberInput.value.length !== 10){
        numberInput.style.borderBottomColor = 'red'
        errorFormInput.style.display = 'flex'
    }else{
        getNewStepCircle()
        getNewStepLine()
        getNewStepContent()
        randomCode()
        submit.style.display = 'none'
        errorFormInput.style.display = 'none'
    }


}
function blurPhoneNumbers() {
        numberInput.style.borderBottomColor = '#E2E4E5'
}
function focusPhoneNumbers() {
    if (numberInput.value.length !== 10) {
       numberInput.style.borderBottomColor = '#007AFF'
    }
}
numberInput.addEventListener('focus', focusPhoneNumbers)
numberInput.addEventListener('blur', blurPhoneNumbers)

