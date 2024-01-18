const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//브라우저가 보자마자 자동으로 아래 함수 실행
//event listener가 직접 실행하지 않고 브라우저가 함수들을 실행함
function onLoginSubmit(event) {
    
    //브라우저의 기본 동작을 막아줌 
    //어디가 클릭되었는지 등 정보를 파악하기 위해서 주로 사용
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    
    //자주 사용하는방법
    //기억하는 법
    // key, value 방식으로 저장
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


// submit시 입력값을 받아냄 
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}

else {
    paintGreetings(savedUsername);
}
    
    



