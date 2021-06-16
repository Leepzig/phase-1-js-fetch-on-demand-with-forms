  
const baseUrl = "http://localhost:3000/movies/"

const init = () => {
  const inputForm = document.querySelector('form')

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = document.querySelector('input#searchByID')

    fetch(`${baseUrl}${input.value}`)
    .then(response => response.json())
    .then(data => {
      const h4 = document.querySelector("#movieDetails h4")
      const p = document.querySelector("#movieDetails p")
      h4.innerText = data.title
      p.innerText = data.summary
    })
  })


}

document.addEventListener('DOMContentLoaded', init);