function logincred(){
    const userName = document.getElementById("user").value ;
    const password = document.getElementById("pass").value ;

    if(userName === "u1" && password === "p1"){
        document.getElementById("alertbox").innerHTML=`<div class="alert alert-success" role="alert" id="successAlert">
        SUSSESFULLY LOGGED IN..!!
      </div>`;
    }else{
        document.getElementById("alertbox").innerHTML=`<div class="alert alert-warning" role="alert" id="failAlert">
        WRONG INFORMATION
      </div>`;
    }

}