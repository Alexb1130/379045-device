var link    = document.querySelector('#form-link');
var popup   = document.querySelector('.popup-form');
var close   = document.querySelector('.popap-close');
var login   = popup.querySelector('[name=name]');
var email   = popup.querySelector('[name=email]');
var letter  = popup.querySelector('[name=letter]');
var storage = localStorage.getItem('login');
var map     = document.querySelector('.map');
var mPopup  = document.querySelector('.map-popap');
var mClose  = mPopup.querySelector('.popap-close');


link.addEventListener('click', function (e) {
  e.preventDefault();
  popup.classList.add('open-popup');

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener('click', function (e) {
  e.preventDefault();
  popup.classList.remove('open-popup');
  popup.classList.remove('error');
});

popup.addEventListener('submit', function (e) {

  if (!login.value || !email.value || !letter.value) {
    e.preventDefault();
    popup.classList.remove('error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('error');
  } else {
    localStorage.setItem('login', login.value);
  }

});

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    if (popup.classList.contains('open-popup')) {
      popup.classList.remove('open-popup');
      popup.classList.remove('error');
    }
  }
});

map.addEventListener('click', function (e) {
  e.preventDefault();
  mPopup.classList.add('open-popup');

});

mClose.addEventListener('click', function (e) {
  e.preventDefault();
  mPopup.classList.remove('open-popup');
})

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    if (mPopup.classList.contains('open-popup')) {
      mPopup.classList.remove('open-popup');
    }
  }
});

