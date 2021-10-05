// Đóng mở phần hiển thị share post 
var sharePost = document.querySelector('.share__post')
var shareContent = document.querySelector('.share__content')//Trỏ tới phần DOM muốn hiển thị 
var share = document.querySelectorAll('.share')//Lấy tất cả các lớp có class là share
for (var i = 0; i < share.length; i++) {
  share[i].addEventListener('click', function () { //tiến hành lặp và tạo sự kiện cho tất các lớp này
    sharePost.style.display = 'block'
    shareContent.style.display = 'flex'
  })
}
// Đóng phần hiển thị share post
function closeShare() {
  sharePost.style.display = 'none'
}

// Hiện thị tab theo tên danh mục 
var tabb = document.querySelectorAll('.tab-item')
var tabbItem = document.querySelector('.tab-item.active')
var panee = document.querySelectorAll('.tab-pane')
var linee = document.querySelector('.line')
linee.style.left = tabbItem.offsetLeft + 'px' //Tự động căn lề trái khi chuyển tab
linee.style.width = tabbItem.offsetWidth + 'px' //Tự động set độ rộng khi chuyển tab
tabb.forEach((e, index) => { //Lấy tất cả các tab
  var panees = panee[index]
  e.addEventListener('click', function () {//Thêm sự kiện click cho tất cả các danh mục tab-item
    var removeActive = document.querySelector('.tab-item.active')
    var removePanne = document.querySelector('.tab-pane.active')
    removeActive.classList.remove('active')//Loại bỏ đi các active đã add trước đó ở tab-iem
    removePanne.classList.remove('active')//Loại bỏ đi các active đã add trước đó ở tab-panne
    this.classList.add('active') //Thêm active cho chính item đang click vào nó
    panees.classList.add('active') // Thêm class active cho danh mục panne muốn hiển thị
    linee.style.left = this.offsetLeft + 'px' //Tự động set lại lề trái và độ rộng đối với item đang chọn cho linee
    linee.style.width = this.offsetWidth + 'px'
  })
})

// Đóng mở danh mục header khi có tương thích responsive
function toggleMenu() {
  var menu = document.querySelector('.toggle');
  var open = document.querySelector('.categories__menu');
  menu.classList.toggle('active');
  open.classList.toggle('active');
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


var page = document.querySelector('.pagination')
var pagenation = page.getElementsByClassName('p')
for (var i = 0; i < pagenation.length; i++) {
  pagenation[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('actives')
    current[0].className = current[0].className.replace(" actives", "")
    this.className += " actives"
  })
}