
// const inputBox = document.querySelector(".inputField input")
// const addBtn = document.querySelector(".inputField input")



// inputBox.onkeyup = ()=>{
//     let userData = inputBox.Value;
//     if(userData.trim() !=0){
//         addBtn.classList.add("active")
//     }else{
//         addBtn.classList.remove("active")

//     }
// }


var listBox = document.getElementById("listBox")
function addTodo(){
    var input = document.getElementById("input")

    if(input.value.length > 2){
         
    var li = document.createElement("li")
    var liTxt = document.createTextNode(input.value)

    li.appendChild(liTxt)
    
                //button js///

    var editBtn = document.createElement("button")
    var editBtnTxt = document.createTextNode("EDIT")
    editBtn.setAttribute("onclick" , "editList(this)")
    editBtn.appendChild(editBtnTxt)

    var i = document.createElement("i")
    // i.className = "fas fa-trash"
    // console.log(i)

        li.appendChild(i)
        i.setAttribute
        li.appendChild(editBtn)
   
    var delBtn = document.createElement("button")
    var delBtnTxt = document.createTextNode("DEL")
    delBtn.setAttribute("onclick" , "delList(this)")

    delBtn.appendChild(delBtnTxt)
    
    li.appendChild(delBtn)

    
    listBox.appendChild(li)

    input.value = ""  

    }else{
        alert("Enter correct value")
    }

}

function delAll(){
            listBox.innerHTML = ""
    }

function editList(e){
    var litxt = e.parentNode.firstChild.nodeValue
    
    var editLiTxt = prompt("EDIT TODO" , litxt )
    console.log(editLiTxt)
    e.parentNode.firstChild.nodeValue = editLiTxt
}
function delList(e){
    
    e.parentNode.remove()

}