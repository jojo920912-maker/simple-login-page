const inputAccount = document.querySelector('.account')
const inputPassword = document.querySelector('.password')
const submitButton = document.getElementById('goLogin')
const forgetButton = document.getElementById('forgetPassword')

function handleSubmit(){
  const account = inputAccount.value
  const password = inputPassword.value
  alert(`帳號資訊是:${account} 密碼資訊是${password}`)
}

submitButton.addEventListener('click', handleSubmit)