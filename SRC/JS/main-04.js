// Validate
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phone')
const pass = document.getElementById('pass')
const cfpass = document.getElementById('cfpass')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  checkName()
  checkEmail()
  checkPhoneNumber()
  checkPass()
})
// Kiểm tra tên người dùng 
function checkName() {
  const usernameVal = username.value.trim()
  if (usernameVal === '') {
    setError(username, 'Tên người dùng không được trống')
    return false
  }
  else if (usernameVal.length < 8) {
    setError(username, 'Tên người dùng phải có từ 8 kí tự trở lên')
    return false
  }
  else setSuccess(username)
}

// Kiểm tra số phone hợp lệ
function checkPhoneNumber() {
  const phoneVal = phoneNumber.value.trim()
  if (phoneVal === '') {
    setError(phoneNumber, 'Số điện thoại không được để trống')
    return false
  }
  else if (!isPhone(phoneVal)) {
    setError(phoneNumber, 'Hãy nhập số điện thoại hợp lệ')
    return false
  }
  else setSuccess(phoneNumber)
}
function isPhone(phone) {
  const ph = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  return ph.test(phone)
}

//Kiểm tra email hợp lệ
function checkEmail() {
  const emailVal = email.value.trim()
  if (emailVal === '') {
    setError(email, 'Email không được để trống')
    return false
  }
  else if (!isEmail(emailVal)) {
    setError(email, 'Hãy nhập vào email đúng định dạng')
    return false
  }
  else setSuccess(email)
}
function isEmail(email) {
  const em = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return em.test(email);
}

//Kiểm tra mật khẩu họp lệ
function checkPass() {
  const passVal = pass.value.trim()
  const cfpassVal = cfpass.value.trim()
  if (passVal === '') setError(pass, 'Mật khẩu không được trống')
  else if (passVal.length < 6) setError(pass, 'Mật khẩu không được ít hơn 6 kí tự')
  else setSuccess(pass)
  if (cfpassVal === '') setError(cfpass, 'Xác nhận không được trống')
  else if (passVal !== cfpassVal) setError(cfpass, 'Mật khẩu xác nhận không trùng khớp')
  else setSuccess(cfpass)
}
// Thêm sự kiện khi bắt lỗi
function setError(input, message) {
  const inputControl = input.parentElement
  const small = inputControl.querySelector('small')
  inputControl.classList = 'input_control error'
  small.innerText = message
}
//Thêm sự kiện khi thành công
function setSuccess(input) {
  const inputControl = input.parentElement
  inputControl.className = 'input_control success'
}
