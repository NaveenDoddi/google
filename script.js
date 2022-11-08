
function run(){

  var button = document.getElementById("input")
  button.addEventListener('keypress', function(event) {
    if (event.key == "Enter") {
      document.getElementById("para").innerHTML=" "
      var input = document.getElementById("input").value
      var a = document.createElement("a")
      a.href = "https://www.google.com/search?q="+input
      a.target = "_self"
      a.innerText = "do you mean search for "+'"'+input+'"'
      a.style.textDecoration="none"
      document.getElementById("para").append(a)
    }

  })

}

