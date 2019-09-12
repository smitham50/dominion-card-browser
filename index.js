const list = document.querySelector('#list')
const info = document.querySelector('#card-info')
const cards = []
let listItems

fetch('https://blooming-sierra-89816.herokuapp.com/api/v1/cards')
.then(resp => resp.json())
.then(resp => {
  resp.forEach(card => {
    if (!cards.map(card => card.name).includes(card.name)) {
      cards.push(card)
    } else {
      null
    }
  })
  renderCards(cards)
  listItems = document.querySelectorAll('li')
  listItems.forEach(node => {
    node.addEventListener('click', function(e) {
      listItems.forEach(node => {
        if (node !== e.target) {
          node.style.color = 'white'
        }
      })
      e.target.style.color = 'blue'
      let clicked = cards.find(card => card.name === e.target.innerText)
      console.log(clicked)
      info.innerHTML = `
      <p>${clicked.description}</p>`
    })
  })
})


function renderCards(cards) {
  cards.forEach(card => { list.innerHTML += `<img src=${card.picture} alt="oops"/>` })
}
