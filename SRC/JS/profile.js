// Hiện thị tab theo tên danh mục 
var tabb = document.querySelectorAll('.tab-item-profile')
var tabbItem = document.querySelector('.tab-item-profile.active')
var panee = document.querySelectorAll('.tab-pane-profile')
var linee = document.querySelector('.linepro')
linee.style.left = tabbItem.offsetLeft + 'px' //Tự động căn lề trái khi chuyển tab
linee.style.width = tabbItem.offsetWidth + 'px' //Tự động set độ rộng khi chuyển tab
tabb.forEach((e, index) => { //Lấy tất cả các tab
  var panees = panee[index]
  e.addEventListener('click', function () {//Thêm sự kiện click cho tất cả các danh mục tab-item
    var titletag = tabb[index].innerText
    document.title = titletag
    var removeActive = document.querySelector('.tab-item-profile.active')
    var removePanne = document.querySelector('.tab-pane-profile.active')
    removeActive.classList.remove('active')//Loại bỏ đi các active đã add trước đó ở tab-iem
    removePanne.classList.remove('active')//Loại bỏ đi các active đã add trước đó ở tab-panne
    this.classList.add('active') //Thêm active cho chính item đang click vào nó
    panees.classList.add('active') // Thêm class active cho danh mục panne muốn hiển thị
    linee.style.left = this.offsetLeft + 'px' //Tự động set lại lề trái và độ rộng đối với item đang chọn cho linee
    linee.style.width = this.offsetWidth + 'px'


  })
})

var fix_profile = document.getElementById('fix_profile')
fix_profile.addEventListener('click', () => {
  tabb.forEach((index) => {
    index = 4
    var panees = panee[index]
    if (tabb[index].innerText === 'My Account') {
      var removeActive = document.querySelector('.tab-item-profile.active')
      var removePanne = document.querySelector('.tab-pane-profile.active')
      removeActive.classList.remove('active')
      removePanne.classList.remove('active')
      tabb[index].classList.add('active')
      panees.classList.add('active')
      linee.style.left = tabb[index].offsetLeft + 'px'
      linee.style.width = tabb[index].offsetWidth + 'px'
    }
    else {
      console.log('loi')
    }
  })
})

//Hiển thị chia sẻ 
var dots = document.querySelector('.dotss')
var share = document.querySelector('.sharepro')
var s = document.querySelector('.shareprofile')
var shareprofile = document.querySelector('.share__profile')

share.addEventListener('click', () => {
  shareprofile.classList.toggle('activee')
})
dots.addEventListener('click', function () {
  s.classList.toggle('sharee')
})

//Đóng phần chia sẻ
function closeShare() {
  shareprofile.classList.remove('activee')
  s.classList.remove('sharee')
}

//Xử lý phần chatbot
var chatMess = document.querySelector('.chat_mess')
function closeChatBot() {
  chatMess.style.display = 'none'
}
function openChatBot() {
  chatMess.style.display = 'block'
}

//Xử lý phần resize cho bài viết muốn chia sẻ
var sharesomething = document.querySelector('.sharesomething')
sharesomething.addEventListener('keyup', (e) => {
  sharesomething.style.height = "auto"
  let scheight = e.target.scrollHeight
  sharesomething.style.height = `${scheight}px`
})


// Hiển thị phần danh mục profile khi kích vào avatar
var logoutProfile = document.getElementById('profile')
var logout = document.querySelector('.logout')
logoutProfile.addEventListener('click', () => {
  logout.classList.toggle('profiles')
})

//Hiển thị thông báo
window.onclick = function (event) {
  openCloseDropdown(event)
}

function closeAllDropdown() {
  var dropdown = document.getElementsByClassName('dropdown-expend')
  for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].classList.remove('dropdown-expend')
  }
}

function openCloseDropdown(event) {
  if (!event.target.matches('.dropdown-toggle')) {
    closeAllDropdown()
  }
  else {
    var toggle = event.target.dataset.toggle
    var content = document.getElementById(toggle)
    if (content.classList.contains('dropdown-expend')) {
      closeAllDropdown()
    }
    else {
      closeAllDropdown()
      content.classList.add('dropdown-expend')
    }
  }
}


var url__update = document.getElementById('url__update')
var updateUrl = document.querySelector('.update-url')
var closeUpdateUrl = document.getElementById('closeUpdateUrl')
var confirm = document.getElementById('confirm')
var closeprivate = document.getElementById('closeprivate')
var privteConfirm = document.querySelector('.privte-confirm')
var closeoutcourse = document.getElementById('closeoutcourse')
var outcourseConfirm = document.querySelector('.outcourse-confirm')
var openoutcourse = document.getElementById('openoutcourse')
var leavecourse = document.getElementById('leavecourse')
var leaveprivate = document.getElementById('leaveprivate')
var leaveupdate = document.getElementById('leaveupdate')
var deployConfirm = document.querySelector('.deploy-confirm')
var deploy = document.getElementById('deploy')
var leavedeploy = document.getElementById('leavedeploy')
var closedeploy = document.getElementById('closedeploy')

url__update.addEventListener('click', () => {
  updateUrl.classList.add('activeupdate')
})

closeUpdateUrl.addEventListener('click', () => {
  updateUrl.classList.remove('activeupdate')
})

leaveupdate.addEventListener('click', () => {
  updateUrl.classList.remove('activeupdate')
})

confirm.addEventListener('click', function () {
  privteConfirm.classList.add('activeconfirm')
})

closeprivate.addEventListener('click', function () {
  privteConfirm.classList.remove('activeconfirm')
})

leaveprivate.addEventListener('click', function () {
  privteConfirm.classList.remove('activeconfirm')
})

openoutcourse.addEventListener('click', () => {
  outcourseConfirm.classList.add('activeoutconfrim')
})

closeoutcourse.addEventListener('click', () => {
  outcourseConfirm.classList.remove('activeoutconfrim')
})

leavecourse.addEventListener('click', () => {
  outcourseConfirm.classList.remove('activeoutconfrim')
})

deploy.addEventListener('click', () => {
  deployConfirm.classList.add('activedeploy')
})

closedeploy.addEventListener('click', () => {
  deployConfirm.classList.remove('activedeploy')
})

leavedeploy.addEventListener('click', () => {
  deployConfirm.classList.remove('activedeploy')
})