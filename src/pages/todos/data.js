class Todo {
	constructor(task, id) {
		this.task = task;
		this.id = id;
		this.done = false;
	}
}

const latestId = 1

// Private functions 
function getAllTodos(username) {
	const todos = window.localStorage.getItem(username);
	return JSON.parse(todos);
}

function setAllTodos(username, todos) {
	window.localStorage.setItem(username, JSON.stringify(todos))
}


// Operations on one todo

function getTodo({ nickname }, id) {
	const todos = getAllTodos(nickname);
	return todos.find((todo) => id == todo.id)
}

function deleteTodo({ nickname }, id) {
	let todos = getAllTodos(nickname);
	const todo = getTodo(nickname, id);
	const index = todos.indexOf(todo);
	if (todo) {
		todos.splice(index, 1);
	}

	setAllTodos(nickname, todos);
}

function completeTodo({ nickname }, id) {
	let todos = getAllTodos(nickname);
	let todo = getTodo(nickname, id);
	todo.done = true;

	setAllTodos(nickname, todos);
}

function appendTodo({ nickname }, task) {
	const todo = new Todo(task, latestId++);
	let todos = getAllTodos(nickname);

	todos.append(todo);

	setAllTodos(nickname, todos)
}

// Get list of todos
function completedTodos({ nickname }) {
	const todos = getAllTodos(nickname);
	return todos.filter((todo) => todo.done)
}

function dueTodos({ nickname }) {
	const todos = getAllTodos(nickname);
	return todos.filter((todo) => !todo.done)
}

// Count

function allTodosCount({ nickname }) {
	return getAllTodos(nickname).length
}




