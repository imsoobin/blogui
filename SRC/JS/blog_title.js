// Phân trang tĩnh cho post
var page = document.querySelector('.pagination')
var pagenation = page.getElementsByClassName('p')
for (var i = 0; i < pagenation.length; i++) {
  pagenation[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('actives')
    current[0].className = current[0].className.replace(" actives", "")
    this.className += " actives"
  })
}

// Đóng mở phần header khi có tương thích màn hình
function toggleMenu() {
  var menu = document.querySelector('.toggle');
  var open = document.querySelector('.categories__menu');
  menu.classList.toggle('active');//Thêm thuộc tính toggle cho menu có tên là active
  open.classList.toggle('active');
}

var chatMess = document.querySelector('.chat_mess')
function closeChatBot(){
  chatMess.style.display = 'none'
}
function openChatBot(){
  chatMess.style.display = 'block'
}
