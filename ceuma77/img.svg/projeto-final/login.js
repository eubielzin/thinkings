let login = document.querySelectorAll("#lg")
function logar(login){
  var nick = document.getElementById('adm').value;
  var senha = document.getElementById('senha').value;
  if ( nick == "adm" && senha == 'adm'){
    location.href = "home.html"
  }
  else{
    window.alert('senha ou email incorreto')
  }
}
