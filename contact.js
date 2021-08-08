function sendMail() {
    var r=document.getElementById("r");
    var tempParams ={
        name:document.getElementById("name").value,
        mail:document.getElementById("mail").value,
        message:document.getElementById("msg").value,
    };
    if(tempParams.name == ""){
        console.log("1")
        r.innerHTML="Full Name is not valid";
        r.style.color="red";
    }
    else if(!validateEmail(tempParams.mail)){
        console.log("2");
        r.innerHTML="Email is not valid";
        r.style.color="red";
    }
    else if(tempParams.message == ""){
        console.log(3)
        r.innerHTML="Message is not valid";
        r.style.color="red";
    }
    else{
        emailjs.send('service_yn8zqqj','template_n9g2r98',tempParams)
        .then(function(res){
            if(res.status==200){
                r.innerHTML='Mail sent successfully';
                r.style.color="green";
            }
            else{
                r.innerHTML='There is a problem sending mail';
                r.style.color="green";
            }
        })
    }    
}

function validateEmail(email) 
{
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}