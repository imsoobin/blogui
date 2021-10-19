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

// var messsubmit = document.getElementById('messsubmit')
// messsubmit.addEventListener('keyup', (e) => {
//   messsubmit.style.height = "auto"
//   let scheight = e.target.scrollHeightY
//   messsubmit.style.height = `${scheight}px`
// })

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

/* ------------ XỬ LÝ PHẦN FAKE API VÀ CALL HIỂN THỊ RA MÀN HÌNH ----------- */

// let postapi = 'http://localhost:3000/posts'
// function getPosts(callback) {
//   fetch(postapi)
//     .then((response) => {
//       return response.json()
//     })
//     .then(callback)
// }

// function khoiTao() {
//   getPosts(renderPosts)
//   getCategory()
// }
// khoiTao();

// function renderPosts(data) {
//   var htmls = document.getElementById('postItem')
//   var html = data.map((post) => {
//     return `
//     <div class="item__post">
//     <div class="item__img">
//       <img src=${post.image} alt="">
//     </div>
//     <div class="item__info">
//       <div class="info__ava">
//         <img src="../../IMG/logo_vn.png" alt="">
//       </div>
//       <div class="info__text">
//         <h5>${post.user.firstName + ' ' + post.user.lastName}</h5>
//         <p class="realtime">4 giờ trước</p>
//       </div>
//       <div style="position: relative; top: -6px; left: 5px; font-size: 10px; cursor: pointer;">
//         <i class="fas fa-crown" title="Quản trị viên"></i>
//       </div>
//     </div>
//     <div class="item__title">
//       <h3>${post.title}</h3>
//     </div>
//     
//     <div style="border-bottom: 1px solid#ccc; width: 250px; margin: auto;"></div>
//     <div class="item__icon">
//       <i class="far fa-eye"> 999</i>
//       <i class="far fa-heart"> 99</i>
//     </div>
//   </div>
//     `
//   })
//   htmls.innerHTML = html.join('')
// }