// Đóng mở phần header khi có tương thích màn hình
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
    var del = delcmt.querySelector('.delpc')
    del.classList.toggle('opendel')
  })
}

var dellspan = document.querySelectorAll('.delpc')
for(var i =0; i < dellspan.length; i++){
  dellspan[i].addEventListener('click', function(e){
    var thisdel = e.target
    var closedel = thisdel.parentElement
    var clthis = closedel.querySelector('.delpc')
    clthis.classList.remove('opendel')
  })
}
/* --------------------------- Xử lý phần audio phát podcast -------------------------*/

let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

let play = $('.btn-toggle-play')
let audio = $('#audio')
let player = $('.player')
let timeUpdate = $('#progresspcdt')
let rightTime = $('.right')
let leftTime = $('.left')
let skipTime = $('.btn-next')
let preTime = $('.btn-prev')
let repeat = $('.btn-repeat')

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

/* --------------------- Xử lý giao diện phần comment -------------------------*/
const podEvent = $('.pod_event')
const closeComment = $('.close_comment')
const comment = document.getElementById('comment')
const podTextCm = $('textarea')
const postComment = $('.post_comment')
const postFeedback = $('.post_feedback')
const feedbackText = $$('.feedbackText')
const closeFeedback = $$('.close_feedback')
const rep = $$('.rep')


//Hiển thị và ẩn comment
comment.addEventListener('click', () => {
  podTextCm.style.display = 'block'
  comment.style.display = 'none'
  podEvent.style.display = 'flex'
})

//Đóng phần comment
closeComment.addEventListener('click', () => {
  podEvent.style.display = 'none'
  podTextCm.style.display = 'none'
  comment.style.display = 'block'
})

//Xử lý nút đăng bài và auto resize cho textarea của phần bình luận
podTextCm.addEventListener('keyup', (e) => {
  podTextCm.style.height = "auto"
  let scheight = e.target.scrollHeight
  podTextCm.style.height = `${scheight}px`
  if (podTextCm.value.length > 0) {
    postComment.classList.add('comments')
  }
  else {
    postComment.classList.remove('comments')
  }
})
//Phần xử lý hiển thị phản hồi comment
for (var i = 0; i < rep.length; i++) {
  rep[i].addEventListener('click', (e) => {
    var reps = e.target
    var fe = reps.parentElement.parentElement.parentElement.parentElement
    var ff = fe.querySelector('.feedback_cmpc')
    ff.style.display = 'flex'
  })
}

// Đóng phần phản hồi
for (var i = 0; i < closeFeedback.length; i++) {
  closeFeedback[i].addEventListener('click', (e) => {
    var cl = e.target
    var co = cl.parentElement.parentElement.parentElement.parentElement
    co.style.display = 'none'
  })
}

// Thêm sự kiện và resize cho textarea
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
// let callpostapi = 'http://localhost:3000/posts/'
// fetch(callpostapi)
//   .then(res => {
//     return res.json()
//   })
//   .then(data => {
//     var htmls = document.getElementById('podContent')
//     var html = data.map((post) => {
//       return `
//       <div class="pod_curentime">
//         <span>${post.user.firstName +' '+ post.user.lastName}</span>&nbsp; | &nbsp;<span class="realdate">${Date(post.createdDate)}</span>
//       </div>
//       <div class="pod_des">
//         <p>
//           ${post.podContent}
//         </p>
//       </div>
//       `
//     })
//     htmls.innerHTML = html.join('')
//   })

