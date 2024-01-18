//array형식으로 검색됨
const h1 = document.querySelector("div.hello:first-child h1");


function handleTitleClick() {
    //class name 포함 검사
    h1.classList.toggle("clicked");

}

//특정 이벤트 listen
h1.addEventListener("click",handleTitleClick);






