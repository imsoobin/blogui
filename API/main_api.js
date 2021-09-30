let callapi = ''
fetch(callapi)
  .then((response) => {
    return response.json()
  })
  .then(callback)
  .catch((error) => {
    alert(error)
  })