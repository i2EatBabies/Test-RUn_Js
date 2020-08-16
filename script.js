form.addEventListener('submit',e=>{
    e.preventDefault();
   const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('emailf');
const password = document.getElementById('passw');
    if(firstname === '')
        {
          firstname.classlist.add("erroricon");
          document.getElementById("error firstnamep").style.visibility="visible";
        }
    if(lastname=== '')
        {
          lastname.classlist.add("erroricon");
          document.getElementById("error lastnamep").style.visibility="visible";
        }
    if(!isValid(email))
    {
     emailf.classlist.add("erroricon");
     document.getElementById("error emailp").style.visibility="visible";        
    } 
    if(passw === '')
        {
          passw.classlist.add("erroricon");
          document.getElementById("error passwordp").style.visibility="visible";
        }
   
});

 function isValid(email) {
    var re =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}