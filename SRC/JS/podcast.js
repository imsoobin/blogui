var chatMess = document.querySelector('.chat_mess')
function closeChatBot() {
  chatMess.style.display = 'none'
}
function openChatBot() {
  chatMess.style.display = 'block'
}

//Phần hiển thị phần đọc thêm (readmore)
function myFunction() {
  var dots = document.getElementById("point");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//Phần load thêm podcast (loadmore)
$(function () {
  $(".pod").slice(0, 5).show();
  $("body").on('click touchstart', '#loadMore', function (e) {
    e.preventDefault();
    $(".pod:hidden").slice(0, 5).slideDown();
    if ($(".pod:hidden").length == 0) {
      $(".loadMore").css('visibility', 'hidden');
    }
    $('html,body').animate({
      scrollTop: $(this).offset().top
    }, 500);
  });
});

// Đóng mở phần header khi có tương thích màn hình
function toggleMenu() {
  var menu = document.querySelector('.toggle');
  var open = document.querySelector('.categories__menu');
  menu.classList.toggle('active');//Thêm thuộc tính toggle cho menu có tên là active
  open.classList.toggle('active');
}

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