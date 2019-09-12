const list = document.querySelector('#list')
const info = document.querySelector('#card-info')
const cards = []
let cardPics

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
  cardPics = document.querySelectorAll('img')
  cardPics.forEach(node => {
    node.addEventListener('click', function(e) {
      let clicked = cards.find(card => card.picture === e.target.src)
      console.log(clicked)
      if (clicked.description !== null) {
        info.innerHTML = `
        <p>${clicked.description}</p>`
      } else {
        info.innerHTML = '<div></div>'
      }
    })
  })
})


function renderCards(cards) {
  cards.forEach(card => { list.innerHTML += `<img src=${card.picture} alt="oops"/>` })
}
