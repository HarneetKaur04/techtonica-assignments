const urlParams = new URLSearchParams(window.location.search);

// Get the value of "some_key" in eg "?firstname=aaa&lastname=aaa&lastname=aaa&subject=aaaaaaaa"
document.getElementById("result").innerHTML = "Name: " + urlParams.get('fullname') + " Phone: " + urlParams.get('phonenumber') + " Email: " + urlParams.get("email") + "<br>" + " Message: " + urlParams.get("subject")