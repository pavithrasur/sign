function func()
{
  let email = document.getElementById("Email").value;
  let password = document.getElementById('password').value;


  if(email == 'netflix@gmail.com' && password == 'admin123')
  {
    alert("Login Successfull");
  }
  else
  {
    alert("Login denied");
  }
}

function forgetpassword()
{
  let a = prompt("Enter the Email id")
  alert('Verfication Code Send To your Email ID')
}