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
      e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxjXZTHcRqwUrA4nW09UvtRlXPGlhAZdOQC6_-s71LayIknwS"
      console.log(clicked)
      if (clicked.description !== null) {
        info.innerHTML = `
        <h3>${clicked.name}</h3>
        <p>Card Type: ${clicked.card_type}</p>
        <p>Description: ${clicked.description}</p>
        <p>Cost: ${clicked.cost}</p>
        <img src=${clicked.picture} alt="oops" class="large"/>`
      } else {
        info.innerHTML = `
        <h3>Trash</h3>
        <img src=${clicked.picture} alt="oops" class="large"/>`
      }
    })
  })
})


function renderCards(cards) {
  cards.forEach(card => { list.innerHTML += `<img src=${card.picture} alt="oops"/>` })
}
