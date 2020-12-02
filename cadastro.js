validar = function (Criar) {
    var str = document.getElementById('senha').value;
    if (str.length < 8 || str.length > 14) {
        document.getElementById("message").innerHTML = "Sua senha deve ter pelo menos 8 dígitos e não mais que 14 dígitos."
        document.getElementById("message").style.color = "Red";
        return false;
    } else if (str.search(/[0-9]/) == -1) {
        document.getElementById("message").innerHTML = "Sua senha deve conter pelo menos um número."
        document.getElementById("message").style.color = "Red";
        return false;
    }
    else if (str.search(/[a-z]/) == -1) {
        document.getElementById("message").innerHTML = "Sua senha deve conter pelo menos uma letra minúscula."
        document.getElementById("message").style.color = "Red";
        return false;
    }
    else if (str.search(/[A-Z]/) == -1) {
        document.getElementById("message").innerHTML = "Sua senha deve conter pelo menos uma letra maiúscula."
        document.getElementById("message").style.color = "Red";
        return false;
    }
    else if (str.search(/[!\@\#\$\%\¨\&\*\(\)\_\+\=\-\;]/) == -1) {
        document.getElementById("message").innerHTML = "Sua senha deve conter pelo menos um dígito especial."
        document.getElementById("message").style.color = "Red";
        return false;
    }

    document.getElementById("message").innerHTML = "Senha válida!";
    document.getElementById("message").style.color = "Green";
    document.getElementById("myForm").submit();
    return true;
}