let inputTask=document.querySelector("input")
let addBtn=document.querySelector("button")
let listContainer=document.querySelector(".list-container")

addBtn.addEventListener("click",(e)=>{
   if(inputTask.value === ""){
    alert("Enter a Task")
   }else{
     let li=document.createElement("li")
     
     li.innerHTML=inputTask.value;
     listContainer.appendChild(li)
     let span=document.createElement("span")
     span.innerHTML="\u00d7"
     li.appendChild(span)
     
    inputTask.value=""
    addData();


     li.addEventListener("click",(e)=>{
        if( li.className=="checked"){
          li.className=""
          addData()
        }else{
            li.className="checked"
            addData()
        }
       
        
     },false)


     span.addEventListener("click",()=>{
        li.remove();
        addData()

     })
   }

})
function addData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();
function removeData(){
    localStorage.clear();
}
// removeData();