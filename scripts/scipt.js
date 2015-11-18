"use strict";

var register = {


    openWindow: function(){
        
        var registerWindow = document.getElementById("contentReg");
        var registerButton = document.getElementById("registerButton");
        var closeRegister = document.getElementById("closeRegister");
        var submitButton = document.getElementById("button");
        var confirmWindow = document.getElementById("confirm");
        var closeConfirm = document.getElementById("closeConfirm");
        var loginUserName = document.getElementById("loginUserName");
        var registerUserName = document.getElementById("registerUserName");

        registerButton.addEventListener("click", function(){                    /*Visa registrerafönstret*/
            registerWindow.style.visibility = "visible";
            registerUserName.focus();
        });
        
        closeRegister.addEventListener("click", function(){                     /*stäng registrerafönstret*/
            registerWindow.style.visibility = "hidden";
        });
        
        submitButton.addEventListener("click", function(){                      /*visa bekräftelse*/
            registerWindow.style.visibility = "hidden";
            confirmWindow.style.visibility = "visible";
            event.preventDefault();
        });
        
        closeConfirm.addEventListener("click", function(){                      /*stäng bekräftelse*/
            confirmWindow.style.visibility = "hidden";
            loginUserName.focus();
        });
        
        
    }
};



    
window.onload = register.openWindow();