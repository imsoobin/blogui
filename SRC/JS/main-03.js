// Đóng mở input tìm kiếm khi có event
var search = document.querySelector('.search')
var inputSearch = document.querySelector('.inputSearch')
var closeSearch = document.querySelector('.close')
search.addEventListener('click', function () { //Thêm sự kiện cho class search và hiện thị khi click
  inputSearch.style.display = 'inline-block'
  closeSearch.style.display = 'inline-block'
})
// Thêm sự kiện cho class close và đóng lại input khi click
closeSearch.addEventListener('click', function () {
  inputSearch.style.display = 'none'
  closeSearch.style.display = 'none'
})

//Hiển thị chia sẻ 
var dots = document.querySelector('.dots')
var share = document.querySelector('.share')
var sharepost = document.querySelector('.share__post')

share.addEventListener('click', () => {
  sharepost.style.display = 'block'
  share.classList.add('active')
})
dots.addEventListener('click', function() {
  share.classList.toggle('actives')
})
//Đóng phần chia sẻ
function closeShare() {
  sharepost.style.display = 'none'
  share.classList.add('active')
}

// Thu phóng hình ảnh
var close_img = document.querySelector('.closeimg')
var img_none = document.querySelector('.img__none')
var img_block = document.querySelector('.block')
img_block.onclick = function () {
  img_none.style.display = 'flex'
}
close_img.onclick = function () {
  img_none.style.display = 'none'
}
//Trình phát audio
const music = document.querySelector('audio');
const play = document.getElementById('play');
let isPlaying = false;
//Play audio
function playSong(){
  isPlaying = true;
  play.classList.replace('fa-play-circle', 'fa-pause-circle');
  play.setAttribute('title', 'Pause');
  music.play();
}
//Pause audio
function pauseSong(){
  isPlaying = false;
  play.classList.replace('fa-pause-circle','fa-play-circle');
  play.setAttribute('title', 'Play');
  music.pause();
}
//Custom audio

play.addEventListener('click', function(){
  isPlaying ? pauseSong() : playSong()
})