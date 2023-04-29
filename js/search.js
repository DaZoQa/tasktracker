let inputText = document.querySelector('.search-panel-input')
let information = document.querySelector('.card-title')
let submitForm = document.querySelector('.search-panel-icon')

let searchFunction = (text)=> {
  information.array.forEach((element) => {
    if(element.textContent == text){
      element.style='background: red'
      console.log(element)
    }
  })
}

submitForm.addEventListener('click', (e) => {
  e.preventDefault()
  searchFunction(inputText.value)
})