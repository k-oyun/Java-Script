const images =[
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//새로운 요소를 만들어 html에 추가하는 방법 
//<img src="img"/>랑 똑같음
const bgImage = document.createElement("img");
bgImage.src= `img/${chosenImage}`;

//html에 추가
//append는 가장 뒤에
//prepend는 가장 위에
document.body.appendChild(bgImage);



console.log();