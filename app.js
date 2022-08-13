const UserInput = document.querySelector("#userInput");
const output = document.querySelector("#output");
const btn = document.querySelector("#translatebtn");
const serverUrl="https://api.funtranslations.com/translate/groot.json"

const createUrl =(text)=>{
    return encodeURI(serverUrl +"?"+"text="+text);
}


const errorHandler =(error)=>{
    console.log("Error Occured",error);
    alert("There is something wrong.Please try again after some time")

}

const translate =()=>{
    let text = UserInput.value;
    fetch(createUrl(text))
    .then(response => response.json())
    .then(json=>{
        output.innerText= json.contents.translated;
    })
    .catch(errorHandler);
}


btn.addEventListener("click", translate);
