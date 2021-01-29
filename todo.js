//selectors
var todoinput = document.querySelector(".todo-input");
var todobutton= document.querySelector(".todo-button");
var todolist = document.querySelector(".todo-list");

//event listener

todobutton.addEventListener("click", addtodo);
todolist.addEventListener("click",deleteitem);
  

//function declaration

function addtodo(event){
 
 event.preventDefault();
  const div =  document.createElement("div");
 div.classList.add('tododiv');
 const li = document.createElement("li");
 li.classList.add('todoli');
 li.innerText=todoinput.value;
 div.appendChild(li);
 const editbutton = document.createElement("button");
 const deletebutton = document.createElement("button");
editbutton.classList.add('edit');
editbutton.innerHTML = '<i class="far fa-edit"></i>';
deletebutton.classList.add('delete');
deletebutton.innerHTML='<i class="fas fa-trash-alt"></i>';
div.appendChild(editbutton);
div.appendChild(deletebutton);

todolist.appendChild(div);
todoinput.value=null;

}
function deleteitem(e){
   const item = e.target;
   if(item.classList[0]==="delete"){
   const parenttodo = item.parentElement;
   parenttodo.classList.add('fader','fadedOut');
   parenttodo.addEventListener('transitionend',function(){
    parenttodo.remove();
   })
  

  }
}
