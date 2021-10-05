// Validate
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phone')
const pass = document.getElementById('pass')
const cfpass = document.getElementById('cfpass')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  checkInputs()

})
// Kiểm tra tên người dùng 
function checkInputs() {
  const usernameVal = username.value.trim()
  const phoneVal = phoneNumber.value.trim()
  const emailVal = email.value.trim()
  const passVal = pass.value.trim()
  const cfpassVal = cfpass.value.trim()

  if (usernameVal === '') return setError(username, 'Tên người dùng không được trống')
  else if (usernameVal.length < 8) return setError(username, 'Tên người dùng phải có từ 8 kí tự trở lên')
  else { setSuccess(username) }

  if (emailVal === '') return setError(email, 'Nhập vào email')
  else if (!isEmail(emailVal)) return setError(email, 'Hãy nhập vào email đúng định dạng')
  else { setSuccess(email) }

  if (phoneVal === '') return setError(phoneNumber, 'Nhập vào số điện thoại')
  else if (!isPhone(phoneVal)) return setError(phoneNumber, 'Hãy nhập số điện thoại hợp lệ')
  else { setSuccess(phoneNumber) }

  if (passVal === '') return setError(pass, 'Nhập vào mật khẩu')
  else if (passVal.length < 6) return setError(pass, 'Mật khẩu không được ít hơn 6 kí tự')
  else { setSuccess(pass) }

  if (cfpassVal === '') return setError(cfpass, 'Xác nhận lại mật khẩu')
  else if (passVal !== cfpassVal) return setError(cfpass, 'Mật khẩu xác nhận không trùng khớp')
  else { setSuccess(cfpass) }
}

function isPhone(phone) {
  const ph = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  return ph.test(phone)
}

function isEmail(email) {
  const em = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return em.test(email);
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
