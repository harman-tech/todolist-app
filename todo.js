//selectors
var todoinput = document.querySelector(".todo-input");
var todobutton= document.querySelector(".todo-button");
var todolist = document.querySelector(".todo-list");

//event listener

todobutton.addEventListener("click", addtodo);
todolist.addEventListener("click",
(e)=>{deleteitem(e);enableEdit(e);}); // *** added enableEdit




//function declaration

function addtodo(event){
  
  event.preventDefault();
  const div =  document.createElement("div");
  div.classList.add('tododiv');
  const li = document.createElement("input"); // changed "li" to "input"
  // so the varable li above should probably be changed to input....
  // also the border on the text box should be removed using CSS...


  // I added this event listener.
  li.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      const allTodoLi = document.querySelectorAll(".todoli");
      console.log("All Todo Items",allTodoLi);
      allTodoLi.forEach((item)=>{item.disabled = true;})
    }
  });



  li.disabled = true; // added this line
  li.classList.add('todoli');
  li.value=todoinput.value; // changed .innerHTML to .value
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
  
  editbutton.onclick = enableEdit(this);
  
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

// *******ADDED THIS FUNCTION....
function enableEdit(e) {
  const item = e.target;
  if( item && item.classList[0]==="edit"){
    const todoList = item.parentElement.firstChild;
    todoList.disabled = false;
    console.log("Go ahead and edit...");
  }

  // At this point, you'll need to add an event listener to 
}
