// 게임플레이어 가정
const playerName ="oyun";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";


//위 과정처럼 변수로 지정하는 것은 좋지 않음
//따라서 object 사용
const player ={
    name: "oyun",
    points: 10,
    handsome : false,
    fat : "little bit"
} 

console.log(player);
console.log(player.name);
console.log(player.points);
console.log(player.handsome);
console.log(player.fat);
