// modal

const about = document.querySelector('.about')
const dimm = document.querySelector('.dimm')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')

about.addEventListener('click', function () {
  console.log(this)

  dimm.classList.add('open')
  modal.classList.add('open')
})

close.addEventListener('click', () => {
  dimm.classList.remove('open')
  modal.classList.remove('open')
})

dimm.addEventListener('click', () => {
  dimm.classList.remove('open')
  modal.classList.remove('open')
})
