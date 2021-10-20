function toggleMenu() {
  var menu = document.querySelector('.toggle');
  var open = document.querySelector('.categories__menu');
  menu.classList.toggle('active');//Thêm thuộc tính toggle cho menu có tên là active
  open.classList.toggle('active');
}

var dell = document.querySelectorAll('.dotdel')
for(var i =0 ; i < dell.length; i++){
  dell[i].addEventListener('click', function(e){
    var thiscmt = e.target
    var delcmt = thiscmt.parentElement.parentElement.parentElement
    var del = delcmt.querySelector('.del')
    del.classList.toggle('opendel')
  })
}

var dellspan = document.querySelectorAll('.del')
for(var i =0; i < dellspan.length; i++){
  dellspan[i].addEventListener('click', function(e){
    var thisdel = e.target
    var closedel = thisdel.parentElement
    var clthis = closedel.querySelector('.del')
    clthis.classList.remove('opendel')
  })
}

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
var dots = document.querySelector('.dotsdt')
var share = document.querySelector('.sharedt')
var sharepost = document.querySelector('.share__postdt')

share.addEventListener('click', () => {
  sharepost.style.display = 'block'
  share.classList.add('activedt')
})
dots.addEventListener('click', function () {
  share.classList.toggle('activesdt')
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



/*----------------------------- Trình phát audio --------------------------*/

const music = document.querySelector('audio');
const play = document.getElementById('play');
const timeUpdate = document.getElementById('progress')
let isPlaying = false;
//Play audio
function playSong() {
  isPlaying = true;
  play.classList.replace('fa-play-circle', 'fa-pause-circle');
  play.setAttribute('title', 'Pause');
  music.play();
}
//Pause audio
function pauseSong() {
  isPlaying = false;
  play.classList.replace('fa-pause-circle', 'fa-play-circle');
  play.setAttribute('title', 'Play');
  music.pause();
}
//Custom audio
play.addEventListener('click', function () {
  isPlaying ? pauseSong() : playSong()
})
//Thanh progress tua nhanh trình phát
timeUpdate.onchange = function (e) {
  if (music.duration) {
    let tua = music.duration / 100 * e.target.value
    music.currentTime = tua
  }
}

/*=========================================================================*/

/*----------------------------- Xử lý giao diện phần comment và feedback --------------------------*/

let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

const commentEvent = $('.commnet_event')
const closeComment = $('.close_comment')
const comment = document.getElementById('comment')
const contentcm = $('textarea')
const postComment = $('.post_comment')
const postFeedback = $('.post_feedback')
const feedbackText = $$('.feedbackText')
const closeFeedback = $$('.close_feedback')
const rep = $$('.rep')
const emoji = document.querySelector('.emoji-button')

//Hiện thị phần phản hồi
for (var i = 0; i < rep.length; i++) {
  rep[i].addEventListener('click', (e) => {
    var reps = e.target
    var fe = reps.parentElement.parentElement.parentElement.parentElement
    var ff = fe.querySelector('.feedback_cm')
    ff.style.display = 'flex'
  })
}

//Hiển thị và ẩn comment
comment.addEventListener('click', () => {
  contentcm.style.display = 'block'
  comment.style.display = 'none'
  commentEvent.style.display = 'flex'
  emoji.style.display = 'flex'
})

//Xử lý nút đăng bài và auto resize cho textarea của phần bình luận
contentcm.addEventListener('keyup', (e) => {
  contentcm.style.height = "auto"
  let scheight = e.target.scrollHeight
  contentcm.style.height = `${scheight}px`
  if (contentcm.value.length > 0) {
    postComment.classList.add('comments')
  }
  else {
    postComment.classList.remove('comments')
  }
})

//Xử lý nút đăng bài và auto resize cho textarea của phần phản hồi bình luận
for (var i = 0; i < feedbackText.length; i++) {
  feedbackText[i].addEventListener('keyup', (e) => {
    var ft = e.target
    ft.style.height = "auto"
    let scheight = e.target.scrollHeight
    ft.style.height = `${scheight}px`
    var pf = ft.parentElement.parentElement.parentElement
    var btn_pf = pf.querySelector('.post_feedback')
    if (ft.value.length > 0) {
      btn_pf.classList.add('feedbacks')
    }
    else {
      btn_pf.classList.remove('feedbacks')
    }
  })
}

//Nút đóng comment
closeComment.addEventListener('click', () => {
  commentEvent.style.display = 'none'
  contentcm.style.display = 'none'
  comment.style.display = 'block'
  emoji.style.display = 'none'
})
//Xử lý nút đóng phản hồi
for (var i = 0; i < closeFeedback.length; i++) {
  closeFeedback[i].addEventListener('click', (e) => {
    var cl = e.target
    var co = cl.parentElement.parentElement.parentElement.parentElement
    co.style.display = 'none'
  })
}


var chatMess = document.querySelector('.chat_mess')
function closeChatBot(){
  chatMess.style.display = 'none'
}
function openChatBot(){
  chatMess.style.display = 'block'
}

// Hiển thị phần danh mục profile khi kích vào avatar
var logoutProfile = document.getElementById('profile')
var logout = document.querySelector('.logout')
logoutProfile.addEventListener('click', () => {
  logout.classList.toggle('profiles')
})


//Hiển thị thông báo
window.onclick = function(event){
  openCloseDropdown(event)
}

function closeAllDropdown(){
  var dropdown = document.getElementsByClassName('dropdown-expend')
  for (var i = 0 ; i < dropdown.length ; i++){
      dropdown[i].classList.remove('dropdown-expend')
  }
}

function openCloseDropdown(event){
  if(!event.target.matches('.dropdown-toggle')){
      closeAllDropdown()
  }
  else
  {
      var toggle = event.target.dataset.toggle
      var content = document.getElementById(toggle)
      if (content.classList.contains('dropdown-expend')){
         closeAllDropdown()
      }
      else{
          closeAllDropdown()
          content.classList.add('dropdown-expend')
      }
  }
}

