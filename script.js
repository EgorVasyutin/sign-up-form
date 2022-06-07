const promptCross = document.querySelector('.lock__close')
const prompt = document.querySelector('.lock')
const submit = document.querySelector('.form__button')
const circle_1 = document.querySelector('.step__circle--1')
const blueCircle = '<img src="img/circle-blue.svg" alt="circle-blue">'
const stepLine = document.querySelector('.step__line--1')
const blueLine = '<img src="img/blue-line.svg" alt="line-blue">'
const numberInput= document.querySelector('.form__num--input')

function getPromptClose() {
    prompt.style.display = 'none'
}
promptCross.onclick = getPromptClose

submit.onclick = function () {
    getNewStepCircle()
    getNewStepLine()
}
function getNewStepCircle() {
    circle_1.innerHTML = blueCircle
}
function getNewStepLine() {
    stepLine.innerHTML = blueLine
}


function checkPhoneNumbers() {
    if (numberInput.value.length !== 10) {
        numberInput.style.borderBottomColor = '#007AFF'
    }else if (numberInput.value.length === 10){
        numberInput.style.borderBottomColor = '#E2E4E5'
    }
}
numberInput.onclick = checkPhoneNumbers
