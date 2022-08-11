const urlParams = new URLSearchParams(window.location.search);

// Get the value of "some_key" in eg "?firstname=aaa&lastname=aaa&lastname=aaa&subject=aaaaaaaa"
document.getElementById("result").innerHTML = "firstname: " + urlParams.get('firstname') + " lastname: " + urlParams.get('lastname') + " email: " + urlParams.get("email") + "<br>" + " Message: " + urlParams.get("subject")