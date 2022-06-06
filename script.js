const promptCross = document.querySelector('.lock__close')
const prompt = document.querySelector('.lock')


function getPromptClose() {
    prompt.style.display = 'none'
}
promptCross.onclick = getPromptClose