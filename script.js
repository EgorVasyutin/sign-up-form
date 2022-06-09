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
const inputCode = document.querySelector('.input__code')
const buttonConfirm = document.querySelector('.submit__code')
const sendAgain = document.querySelector('.button_code')
const circle_2 = document.querySelector('.step__circle--2')
const stepLine2 = document.querySelector('.step__line--2')
const buttonPen = document.querySelector('.number__pen')
let codes = []


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
    stepContent2.style.display = 'flex'
}
function randomCode() {
    codes.push(Math.floor(1000 + Math.random() * 9000))
    alert(codes.join(''))
}
function phoneNumber() {
    document.querySelector('.number__container').style.display = 'flex'
    document.querySelector('.form__num--label').style.display = 'none'
    document.querySelector('.num__text').style.display = 'none'
    errorFormInput.style.display = 'none'
    document.querySelector('.number').style.display = 'inline'
    document.querySelector('.number').innerHTML = String(document.querySelector('.prefix__select').value + document.querySelector('.form__num--input').value)
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
        phoneNumber()
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

function blurPhoneCode() {
    inputCode.style.borderBottomColor = '#E2E4E5'
}
function focusPhoneCode() {
    if (inputCode.value.length !== 4) {
        inputCode.style.borderBottomColor = '#007AFF'
    }
}
numberInput.addEventListener('focus', focusPhoneNumbers)
numberInput.addEventListener('blur', blurPhoneNumbers)

inputCode.addEventListener('focus', focusPhoneCode)
inputCode.addEventListener('blur', blurPhoneCode)

function checkCode() {
    function getNewStepCircle() {
        circle_2.innerHTML = blueCircle
    }
    function getNewStepLine() {
        stepLine2.innerHTML = blueLine
    }
    if (inputCode.value !== codes.join('')){
        inputCode.style.borderBottomColor = 'red'
    }else{
        getNewStepCircle()
        getNewStepLine()
    }
}
buttonConfirm.onclick = checkCode

function clearCode() {
    inputCode.value = ''
}
sendAgain.onclick = clearCode

function getNewNumber() {
    document.querySelector('.number__container').style.display = 'none'
    document.querySelector('.form__num--label').style.display = 'flex'
    document.querySelector('.num__text').style.display = 'inline'
    document.querySelector('.number').style.display = 'none'
    submit.style.display = 'flex'
    codes = []
}
buttonPen.onclick = getNewNumber


