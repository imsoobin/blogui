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
function closeChatBot(){
  chatMess.style.display = 'none'
}
function openChatBot(){
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
