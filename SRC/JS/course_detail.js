// Đóng mở phần header khi có tương thích màn hình
function toggleMenu() {
  var menu = document.querySelector('.toggle');
  var open = document.querySelector('.categories__menu');
  menu.classList.toggle('active');//Thêm thuộc tính toggle cho menu có tên là active
  open.classList.toggle('active');
}

// Đóng mở chatbot
var chatMess = document.querySelector('.chat_mess')
function closeChatBot(){
  chatMess.style.display = 'none'
}
function openChatBot(){
  chatMess.style.display = 'block'
}


$(document).ready(function () {
  size_li = $(".left__listcourse .left__list").size();
  size_like = $(".left__bloglike .left__listlike").size();
  x = 3;
  y = 3;
  $('.left__listcourse .left__list:lt(' + x + ')').show();
  $('.left__bloglike .left__listlike:lt(' + y + ')').show();

  $('#viewmore').click(function () {
    x = (x + 3 <= size_li) ? x + 3 : size_li;
    $('.left__listcourse .left__list:lt(' + x + ')').show();
    $('.viewless').css('display', 'flex');
    if (x == size_li) {
      $('.viewmore').hide();
    }
  });
  $('#viewless').click(function () {
    x = (x - 3 < 0) ? 3 : x - 3;
    $('.left__listcourse .left__list').not(':lt(' + x + ')').hide();
    $('.viewmore').show();

    if (x == 3) {
      $('.viewless').hide();
    }
  });
  $('#viewmoresame').click(function () {
    y = (y + 3 <= size_like) ? y + 3 : size_like;
    $('.left__bloglike .left__listlike:lt(' + y + ')').show();
    $('.viewlesssame').css('display', 'flex');
    if (y == size_like) {
      $('.viewmoresame').hide();
    }
  });
  $('#viewlesssame').click(function () {
    y = (y - 3 < 0) ? 3 : y - 3;
    $('.left__bloglike .left__listlike').not(':lt(' + y + ')').hide();
    $('.viewmoresame').show();
    if (y == 3) {
      $('.viewlesssame').hide();
    }
  });
});

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
// Hiển thị phần danh mục profile khi kích vào avatar
var logoutProfile = document.getElementById('profile')
var logout = document.querySelector('.logout')
logoutProfile.addEventListener('click', () => {
  logout.classList.toggle('profiles')
})
/* --------------------------- Xử lý phần audio phát podcast -------------------------*/

// let $ = document.querySelector.bind(document)
// let $$ = document.querySelectorAll.bind(document)

// let play = $('.btn-toggle-play')
// let audio = $('#audio')
// let player = $('.player')
// let timeUpdate = $('#progresspcdt')
// let rightTime = $('.right')
// let leftTime = $('.left')
// let skipTime = $('.btn-next')
// let preTime = $('.btn-prev')
// let repeat = $('.btn-repeat')

let play = document.querySelector('.btn-toggle-play')
let audio = document.getElementById('audio')
let player = document.querySelector('.player')
let timeUpdate = document.getElementById('progresspcdt')
let rightTime = document.querySelector('.right')
let leftTime = document.querySelector('.left')
let skipTime = document.querySelector('.btn-next')
let preTime = document.querySelector('.btn-prev')
let repeat = document.querySelector('.btn-repeat')

let index = 0
let isPlaying = false
let isRepeat = false
const PLAYER_STORAGE_KEY = 'son'

/* Khai báo một object chứa các thành phần xử lý */
let podcastApp = {
  config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  setConfig: function (key, value) {
    this.config[key] = value
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
  },
  audioPodcast: [
    {
      audioUrl: '../../AUDIO/ThangNam.mp3'
    }
  ],

  //Hàm load podcast
  loadPodcast: function (audioPodcast) {
    audio.src = audioPodcast.audioUrl
  },

  //Xử lý sự kiện
  handleEvents: function () {
    let _this = this
    play.onclick = function () {
      _this.setConfig('isPlaying', isPlaying)
      isPlaying ? audio.pause() : audio.play()
    }
    //Sự kiện thay đổi icon khi phát audio
    audio.onplay = function () {
      isPlaying = true
      player.classList.add('playing')
    }
    audio.onpause = function () {
      isPlaying = false
      player.classList.remove('playing')
    }

    //Cập nhật thời gian cho thanh progress bar khi phát audio
    audio.ontimeupdate = function () {
      if (audio.duration) {
        let progressPercent = Math.floor((audio.currentTime / audio.duration) * 100)
        timeUpdate.value = progressPercent
      }

      let durationMinute = Math.floor(audio.duration / 60)
      let durationSecond = Math.floor(audio.duration % 60)
      if (durationSecond < 10) {
        durationSecond = `0${durationSecond}`
      }

      if (durationSecond) {
        rightTime.textContent = `${durationMinute}:${durationSecond}`
      }

      let currentMinute = Math.floor(audio.currentTime / 60)
      let currentSecond = Math.floor(audio.currentTime % 60)
      if (currentSecond < 10) {
        currentSecond = `0${currentSecond}`
      }

      if (currentSecond) {
        leftTime.textContent = `${currentMinute}:${currentSecond}`
      }
    }

    // update time trên thanh progress bar khi click
    timeUpdate.onchange = function (e) {
      if (audio.duration) {
        let updatetimebar = (audio.duration / 100) * (e.target.value)
        audio.currentTime = updatetimebar
      }
    }

    //Skip 10s
    skipTime.onclick = function () {
      audio.currentTime += 10.0
    }

    //Pre 10s
    preTime.onclick = function () {
      audio.currentTime -= 10.0
    }

    //xử lý khi kết thúc bài hát
    audio.onended = function () {
      if (isRepeat) {
        audio.play()
      }
    }

    //Xử lý lặp lại
    repeat.onclick = function () {
      isRepeat = !isRepeat
      repeat.classList.toggle('active', isRepeat)
      _this.setConfig('isRepeat', isRepeat)
    }


  },

  loadConfig: function () {
    isRepeat = this.config.isRepeat
  },
  //Hàm khởi chạy
  start: function () {
    this.loadConfig()
    this.handleEvents()
    this.loadPodcast(this.audioPodcast[index])
    repeat.classList.toggle('active', isRepeat)
  }
}
podcastApp.start()

/* ==========================================================================  */