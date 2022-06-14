const promptCross = document.querySelector('.lock__close')
const prompt = document.querySelector('.lock')

// FORM 1: PHONE NUMBER
const numberInput = document.querySelector('.form__num--input')
const submit = document.querySelector('.form__button')
const circle_1 = document.querySelector('.step__circle--1')
const stepLine = document.querySelector('.step__line--1')
const errorFormInput = document.querySelector('.text__error')

// FORM 2: CONFIRMATION CODE
const stepContent2 = document.querySelector('.content__step-2')
const circle_2 = document.querySelector('.step__circle--2')
const stepLine2 = document.querySelector('.step__line--2')
const inputCode = document.querySelector('.input__code')
const buttonConfirm = document.querySelector('.submit__code')
const sendAgain = document.querySelector('.button_code')
const editPhoneNumberButton = document.querySelector('.number__pen')

// FORM 3: EMAIL, PASSWORD
const emailPasswordFormElement = document.getElementById('email-password-form')
const emailPasswordFormSubmitButtonElement =
  emailPasswordFormElement.querySelector("button[type='submit']")
emailPasswordFormSubmitButtonElement.addEventListener('click', (event) => {
  event.preventDefault()

  if (getIsFormValid()) {
    alert('Вы успешно зарегались')
  }
})

// CONSTANTS
// colors
const COLOR_GREY = '#E2E4E5'
const COLOR_BLUE = '#007AFF'
const COLOR_GREEN = '#34C759'
const COLOR_RED = '#FF0000'

const PASSWORD_STATUSES = {
  good: 'good',
  medium: 'medium',
  easy: 'easy',
  incorrect: 'incorrect'
}

const PASSWORD_HINTS = {
  good: 'Good password',
  medium: 'Medium password',
  easy: 'Easy password',
  incorrect: 'Incorrect input'
}

// STATE
let confirmationCode = null
let passwordStatus = PASSWORD_STATUSES.incorrect

// COMPONENTS
const blueCircleHTML = '<img src="./assets/img/circle-blue.svg" alt="circle-blue">'
const defCircleHTML = '<img src="./assets/img/circle-def.svg" alt="circle">'
const blueLineHTML = '<img src="./assets/img/blue-line.svg" alt="line-blue">'
const defLineHTML = '<img src="./assets/img/line.svg" alt="line">'

// email-password from field component

const emailPasswordForm = {
  fields: [
    {
      id: 'form-3-field-email',
      type: 'email',
      label: 'Enter your email',
      value: null,
      hintText: '',
      isValid: false
    },
    {
      id: 'form-3-field-password',
      type: 'password',
      label: 'Set a password',
      value: null,
      hintText: '',
      isValid: false
    },
    {
      id: 'form-3-field-password-2',
      type: 'password',
      label: 'Repeat password',
      value: null,
      hintText: '',
      isValid: false
    }
  ],
  isValid: false
}

function getEmailPasswordFormFieldHTML(hintText, hasIcon) {
  const iconHTML = `
      <div class="form-3-field-hint__icon">
        <img src="./assets/img/flag-green.svg" alt="flag" />
      </div>
  `
  return `
      <div class="form-3-field__hint form-3-field-hint">
        ${hasIcon ? iconHTML : ''}
        <div class="form-3-field-hint__text">${hintText}</div>
      </div>
  `
}

function getEmailPasswordFormFieldHTML(fieldModel) {
  const hintHTML = fieldModel.hintText.length
    ? getEmailPasswordFormFieldHTML(fieldModel.hintText, fieldModel.isValid)
    : ''

  return `
      <div id="${fieldModel.id}" class="form-3__field">
        <label class="form-3-field__label">
          <span class="form-3-field__label-text">
            ${fieldModel.label}
          </span>
          <input type="${fieldModel.type}" class="form-3-field__input" />
        </label>
        ${hintHTML}
      </div>
  `
}

const emailPasswordFormBody = emailPasswordFormElement.querySelector('.form-3__body')
emailPasswordForm.fields.forEach((field) => {
  emailPasswordFormBody.innerHTML += getEmailPasswordFormFieldHTML(field)
})

// OTHER LOGIC

function closePrompt() {
  prompt.style.display = 'none'
}

function getNewStepCircle() {
  circle_1.innerHTML = blueCircleHTML
}
function getNewStepLine() {
  stepLine.innerHTML = blueLineHTML
}
function getNewStepContent() {
  stepContent2.style.display = 'flex'
}
function updateConfirmationCode() {
  confirmationCode = Math.floor(1000 + Math.random() * 9000).toString()
}
function showNewConfirmationCode() {
  updateConfirmationCode()
  alert(confirmationCode)
}

function phoneNumber() {
  document.querySelector('.number__container').style.display = 'flex'
  document.querySelector('.form__num--label').style.display = 'none'
  document.querySelector('.num__text').style.display = 'none'
  errorFormInput.style.display = 'none'
  document.querySelector('.number').style.display = 'inline'
  document.querySelector('.number').innerHTML = String(
    document.querySelector('.prefix__select').value +
      document.querySelector('.form__num--input').value
  )
}

function blurPhoneNumbers() {
  numberInput.style.borderBottomColor = COLOR_GREY
}
function focusPhoneNumbers() {
  if (numberInput.value.length !== 10) {
    numberInput.style.borderBottomColor = COLOR_BLUE
  }
}

function blurPhoneCode() {
  inputCode.style.borderBottomColor = COLOR_GREY
}
function focusPhoneCode() {
  if (inputCode.value.length !== 4) {
    inputCode.style.borderBottomColor = COLOR_BLUE
  }
}
numberInput.addEventListener('focus', focusPhoneNumbers)
numberInput.addEventListener('blur', blurPhoneNumbers)

inputCode.addEventListener('focus', focusPhoneCode)
inputCode.addEventListener('blur', blurPhoneCode)

function checkCode() {
  function getNewStepCircle() {
    circle_2.innerHTML = blueCircleHTML
  }
  function getNewStepLine() {
    stepLine2.innerHTML = blueLineHTML
  }

  if (inputCode.value !== confirmationCode) {
    inputCode.style.borderBottomColor = COLOR_RED
    document.querySelector('.form__input--text').innerHTML = 'Incorrect code'
    document.querySelector('.form__input--text').style.color = COLOR_RED
  } else {
    getNewStepCircle()
    getNewStepLine()
    stepContent2.style.display = 'none'
    document.querySelector('.text__number').innerHTML = 'Number confirmed'
    document.querySelector('.text__number').style.paddingLeft = '5px'
    document.querySelector('.number__pen').style.display = 'none'
    document.querySelector('.number__flag').style.display = 'inline'
    document.querySelector('.content__step-3').style.display = 'inline'
  }
}
buttonConfirm.onclick = checkCode

function clearConfirmationCode() {
  confirmationCode = null
  inputCode.value = ''
}

function onSendAgainClick() {
  clearConfirmationCode()
  showNewConfirmationCode()
}

function onEditPhoneNumberButtonClick() {
  document.querySelector('.number__container').style.display = 'none'
  document.querySelector('.form__num--label').style.display = 'flex'
  document.querySelector('.num__text').style.display = 'inline'
  document.querySelector('.number').style.display = 'none'
  circle_1.innerHTML = defCircleHTML
  stepLine.innerHTML = defLineHTML
  stepContent2.style.display = 'none'
  submit.style.display = 'flex'
  confirmationCode = null
}

function setPasswordStatus(password) {
  const passwordRegExpMedium = /^(?=.*\d)(?=.*([a-z]|[A-Z])).{6,}$/
  const passwordRegExpGood = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/

  if (passwordRegExpGood.test(password)) passwordStatus = PASSWORD_STATUSES.good
  else if (passwordRegExpMedium.test(password)) passwordStatus = PASSWORD_STATUSES.medium
  else if (getIsPasswordValid(password)) passwordStatus = PASSWORD_STATUSES.easy
  else passwordStatus = PASSWORD_STATUSES.incorrect
}

function setPasswordStyles() {
  switch (passwordStatus) {
    case PASSWORD_STATUSES.good:
      passwordHintElement.style.display = 'flex'
      passwordHintCheckElement.style.display = 'inline'
      passwordHintTextElement.innerHTML = PASSWORD_HINTS.good
      passwordHintTextElement.style.color = COLOR_GREEN
      break
    case PASSWORD_STATUSES.medium:
      passwordHintElement.style.display = 'flex'
      passwordHintCheckElement.style.display = 'none'
      passwordHintTextElement.innerHTML = PASSWORD_HINTS.medium
      passwordHintTextElement.style.color = COLOR_GREY
      break
    case PASSWORD_STATUSES.easy:
      passwordHintElement.style.display = 'flex'
      passwordHintCheckElement.style.display = 'none'
      passwordHintTextElement.innerHTML = PASSWORD_HINTS.easy
      passwordHintTextElement.style.color = COLOR_GREY
      break
    case PASSWORD_STATUSES.incorrect:
      passwordHintElement.style.display = 'flex'
      passwordHintCheckElement.style.display = 'none'
      passwordHintTextElement.innerHTML = PASSWORD_HINTS.incorrect
      passwordHintTextElement.style.color = COLOR_RED
      passwordInput.style.borderBottomColor = COLOR_RED
      break
  }
}

function getIsFormValid() {
  const emailFieldElement = emailPasswordFormElement.querySelector(
    `div#${emailPasswordForm.fields[0].id}`
  )
  const emailElement = emailPasswordFormElement.querySelector('input[type="email"]')
  const email = emailElement.value
  const passwordElements = emailPasswordFormElement.querySelectorAll('input[type="password"]')
  const password = passwordElements[0].value
  const password2 = passwordElements[1].value

  const isEmailValid = getIsEmailValid(email)
  if (!isEmailValid && !emailFieldElement.className.includes('invalid')) {
    emailFieldElement.className += ' invalid'
  }
  // else {
  //   emailElement.className
  //     .split(' ')
  //     .filter((cls) => cls !== 'invalid')
  //     .join(' ')
  // }

  // const isPasswordValid = getIsPasswordValid(password)
  // const isPassword2Valid = getIsPasswordValid(password2)
  // const arePasswordEqual = password === password2
  // setPasswordStatus(password)
  // setPasswordStyles()

  return isEmailValid // && isPasswordValid && isPassword2Valid && arePasswordEqual
}

function getIsEmailValid(email) {
  return (
    email.includes('@') &&
    email.split('@')[0].length >= 3 &&
    (email.includes('.ru') || email.includes('.com'))
  )
}

function getIsPasswordValid(password) {
  return /.{6,}/.test(password)
}

// EVENT LISTENERS
promptCross.onclick = closePrompt

submit.onclick = function () {
  if (numberInput.value.length !== 10) {
    numberInput.style.borderBottomColor = COLOR_RED
    errorFormInput.style.display = 'flex'
  } else {
    getNewStepCircle()
    getNewStepLine()
    getNewStepContent()
    showNewConfirmationCode()
    phoneNumber()
    submit.style.display = 'none'
    errorFormInput.style.display = 'none'
  }
}

sendAgain.onclick = onSendAgainClick

editPhoneNumberButton.onclick = onEditPhoneNumberButtonClick
