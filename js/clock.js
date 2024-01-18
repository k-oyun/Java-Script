const clock = document.querySelector("h2#clock");

function getClock() {
    //시간 API
    const date = new Date();

    //padStart를 이용하여 string 앞에 ( 몇개로 채울지, 뭐로 채울지)
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");;
    const seconds = String(date.getSeconds()).padStart(2, "0");;

    clock.innerText = `${hours}:${minutes}:${seconds}`;


}

// 브라우저 실행하자마자 바로 시간이 나타나도록
getClock();

// 5초마다 반복
// 이것을 이용하여 date를 현재 시간으로 인식할 수 있다.
 setInterval(getClock, 1000); 

// 5초 뒤에 실행
// setTimeout(sayHello,5000 );