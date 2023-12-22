import "./styles.css";

const onClickAdd = () => {
    // テキストボックスを初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // li 生成
    const li = document.createElement("li");

    // div 生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p 生成   
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;

    // button 生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "complete";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";


    // 親子設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    document.getElementById("incomplete-list").appendChild(li);

    console.log(li);
}

const onClickAdd = () => {

document.getElementById("add-button").addEventListener("click", onClickAdd);
