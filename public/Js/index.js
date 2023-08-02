const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("Logged");
const session = localStorage.getItem("session");

checkLogged( );

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const Account = getAccount(email);

    if(!Account){
        alert("opss! Verifique o Usuario ou a Senha.");
        return;
    }

    if(Account) {
        if(Account.password !== password){
            alert("opss! Verifique o Usuario ou a Senha.");
            return;
        }

        saveSession(email, checkSession)

        window.location.href = "home.html";
    }
});

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if(email.length < 5){
        alert("O seu email não pode conter menos de 5 Caractere");
        return;
    }

    if(password.length < 4){
        alert("Preencha a senha com no mínimo 4 digitos");
        return;
    }

saveAccont({
    login : email,
    password : password,
    transactions : []
});

    myModal.hide();

    alert("conta criada com sucesso bro");
});

function checkLogged(){
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(logged) {
        saveSession(logged, session);

        window.location.href = "home.html";
    }
}

function saveAccont(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession) {
    if(saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data);
}

function getAccount(key) {
    const Account = localStorage.getItem(key);

    if(Account){
        return JSON.parse(Account);
    }

    return "";
}