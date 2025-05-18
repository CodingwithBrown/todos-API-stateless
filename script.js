
document.getElementById('displayTodos').addEventListener('click', async () => {
  const response = await fetch('/todos');
  const todos = await response.json();
  document.getElementById('todoDisplay').textContent = JSON.stringify(todos, null, 2);
});

document.getElementById('submitTodo').addEventListener('click', async () => {
  const name = document.getElementById('todoName').value;
  const priority = document.getElementById('todoPriority').value || 'low';
  const isFun = document.getElementById('todoIsFun').value || 'true';

  const todo = { name, priority, isFun };

  const response = await fetch('/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  });

  const result = await response.json();
  alert(`Todo added: ${JSON.stringify(result)}`);
});

document.getElementById('deleteTodo').addEventListener('click', async () => {
  const id = document.getElementById('todoIdToDelete').value;
  const response = await fetch(`/todos/${id}`, { method: 'DELETE' });
  const result = await response.json();
  alert(result.message);
}); // If you try to delete a todo, make sure you DISPLAY AFTER CLICKING DELETE. If you delete and expect the program to delete real time, I am not that devloper yet.
