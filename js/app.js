// 메뉴
const bar = document.querySelector('.bar')
const nav = document.querySelector('.nav')
const link = document.querySelectorAll('.nav a')

bar.addEventListener('click', function () {
  bar.classList.toggle('on')
  nav.classList.toggle('on')
})

link.forEach((item) => {
  item.addEventListener('click', function () {
    bar.classList.remove('on')
    nav.classList.remove('on')
  })

  bar.addEventListener('click', function () {
    console.log(this)

    about.remove.add('open')
    modal.classList.add('open')
  })
})

// 헤더 스크립트
var header = $('.header')
var goTop = $('.go_top')

$(window).scroll(function () {
  var scrollTopValue = $(document).scrollTop()

  if (scrollTopValue > 0) {
    header.addClass('active')
  } else {
    header.removeClass('active')
  }

  if (scrollTopValue > 900) {
    goTop.fadeIn()
  } else {
    goTop.fadeOut()
  }
})

goTop.click(function () {
  $('html, body').animate({ scrollTop: 0 }, 400)
})
