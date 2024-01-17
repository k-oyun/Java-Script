//array형식으로 검색됨
const title = document.querySelector("div.hello:first-child");

//클릭시 log출력
function handleTitleClick() {
    title.style.color = "blue";
    console.log("title was clicked");
}


//특정 이벤트 listen
title.addEventListener("click",handleTitleClick)

