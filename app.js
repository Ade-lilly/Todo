 
//Model 
//if local storagee has a todo Array, then use it
//otherwise use the defalt array
let todos;
//retrive localstorage
const saveedTodos = JSON.parse(localStorage.getItem('todos'));
//check if it is an array
if (Array.isArray(saveTodos)) {
   todos = saveTodos;
} else {
   todos = [
      {
         title:"Get groceries",
         dueDate:"18-1-2023",
         id: "id1"
      },
      {
         title:"Get groceries",
         dueDate:"18-2-2023",
         id: "id2"
      },
       {
         title:"Wash the car",
         dueDate:"18-3-2023",
         id: "id3"
      },
    
   ]
}

 //the code that Create a todo
function createTodo(title, dueDate){
  const id = "" + new Date().getTime();
   todos.push({
     title:title,
     dueDate:dueDate,
     id:id,
  });
  saveTodos();
}
//the code that Deleting a todo
function removeTodo(idToDelete){
   todos = todos.filter(function(todos){
      // if the id of this todo matches idToDelete, retun false
      // for everything else, return true
      if(todos.id === idToDelete){
         return false
      }else{
         return true;
      }
   });
   saveTodos();
}

function saveTodos(){
   localStorage.setItem('todos', JSON.stringify(todos));
}
//controller section
 function addTodo(){
    const textbox = document.getElementById("todo-title")
    const title = textbox.value;

    const datePicker = document.getElementById("date-picker")
    const dueDate = datePicker.value;
   
    createTodo(title, dueDate);
    render();
 }
  
 
function deleteTodo(event){
const deleteButton = event.target;
const idToDelete = deleteButton.id;

removeTodo(idToDelete)
render()
}


// view
 function render(){
    //reset our page before render
    document.getElementById('todo-list').innerHTML = ""

    todos.forEach(function (todo){
        const element = document.createElement('div');
        element.innerText = todo.title + " " + todo.dueDate;

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.style='margin-left:12px';
      deleteButton.onclick = deleteTodo;
      deleteButton.id = todo.id;
      element.appendChild(deleteButton);

        const todoList = document.getElementById('todo-list')
        todoList.appendChild(element)
     })
   }
   render();