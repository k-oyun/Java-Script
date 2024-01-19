const toDoForm = document.getElementById("todo-form");
//todoform에서 검색

const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//todo를 실제로 저장하기 위한 배열
let toDos = [];

//local storage에 todo를 저장
function saveToDos(){
    //Json.stringify()함수는 배열로 data를 저장할 수 있음
    localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
}

//클릭 시 todo를 제거하도록 하는 function
function deleteToDo(event) {
    //무슨 버튼이 클릭되었는지 구별해야함 --> event 사용 (click event를 이용하여 구분)
    const li = event.target.parentElement;

    //삭제 버튼이 클릭된 todo를 삭제
    li.remove();
    
    //클릭한 것과 다른 id는 남겨두도록 필터링!
    //li의 아이디는 string이기에 int로 바꿔야함
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));

    //지워진 상태를 적용
    saveToDos();
}

function paintToDo(newTodo) {
    //입력 값으로 todo 생성
    //const li는 변수명일 뿐
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    //작성한 todo를 삭제시키기 위한 버튼 생성
    const button = document.createElement("button");
    button.innerText = "X";

    //클릭 시 todo 제거 함수 실행
    button.addEventListener("click",deleteToDo );

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // 입력 값 초기화 전 저장
    const newTodo = toDoInput.value;

    //입력 값 저장 후 초기화
    toDoInput.value="";

    //object를 생성해서 저장
    //중복된 스트링 입력후 삭제시 무엇인지 구별해야하기 때문 
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),

    };
    //todo 생성 전 저장
    toDos.push(newTodoObj);

    // 입력 값으로 todo 생성
    paintToDo(newTodoObj);

    // 저장한 todo를 local storage에 저장
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem("TODOS_KEY");

if(saveToDos !== null){
    //string이 아닌 javascript에서 사용 가능한 object으로 만듬 --> array로 변환
    const parsedToDos = JSON.parse(savedToDos);

    //빈 배열이 아닌 저장된 정보를 유지하면서 시작하도록
    toDos = parsedToDos;

    //배열의 각각의 item에 대한 함수 실행
    parsedToDos.forEach(paintToDo);
}

const arr = [1234,5454,223,122,45];

function sexyFilter(potato) {
    //array에서 무언가를 제거하는게 아닌 해당 item을 제외한 새로운 array생성
    //true를 리턴해야 array에 포함됨
    //false를 return하는 item에 대해서는 새로운 array에 추가하지 않음
    return potato <= 1000;
}


arr.filter(sexyFilter);