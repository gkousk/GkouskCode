function sendMail() {
    var r=document.getElementById("r");
    var tempParams ={
        name:document.getElementById("name").value,
        mail:document.getElementById("mail").value,
        message:document.getElementById("msg").value,
    };
    
    emailjs.send('service_yn8zqqj','template_n9g2r98',tempParams)
    .then(function(res){
        if(res.status==200){
            r.innerHTML='Email sent successfully';
        }
        
    })
}