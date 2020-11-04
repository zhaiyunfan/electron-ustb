let myImage = document.getElementById('pic');
document.getElementById('changePic').onclick = function () {

    if (myImage.style.display === "none") {
        myImage.style.display = "block";
        // alert('none');
    }
    else {
        myImage.style.display = "none"
        // alert('block');
    }
}

let myButton = document.querySelector('button');
let myHeading2 = document.querySelector('h2');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading2.textContent = '欢迎查看USTB的Electron教程！' + myName;
    }
}
myButton.onclick = function () {
    setUserName();
}
if (!localStorage.getItem(name)) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading2.textContent = '欢迎查看USTB的Electron教程' + myName;
}