function validateform(){
    var name=document.myform.name.value;
    var mobile=document.myform.mobile.value;
    var email=document.myform.email.value;

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    
    if (name==null || name=="")
    {
        window.alert("name cannot be empty")
        return false;
    }
    else if(mobile<1000000000 || mobile>9999999999)
    {
        window.alert("Mobile NO. must be of 10 digits")
        return false;
    }
    else if(!validRegex.exec(email))
    {
        alert("Invalid input")
        return false;
    }
}