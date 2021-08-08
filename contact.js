function sendMail() {
    var r=document.getElementById("r");
    var tempParams ={
        name:document.getElementById("name").value,
        mail:document.getElementById("mail").value,
        message:document.getElementById("msg").value,
    };
    if(tempParams.name!="" && tempParams.mail!="" && tempParams.message!=""){
        emailjs.send('service_yn8zqqj','template_n9g2r98',tempParams)
        .then(function(res){
            if(res.status==200){
                r.innerHTML='Email sent successfully';
                r.style.color="green";
            }
        })
    }else{
        r.style.color="red";
        r.innerHTML='Email cant send';
    }
    
}