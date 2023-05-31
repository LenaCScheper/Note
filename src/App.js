import React, { Component } from 'react';
import TodoList from './components/TodoList';
import initialTodos from './todos.json'


class App extends Component {
	state = {
		todos: initialTodos,
	};

	deleteTodo = todoId => {
		this.setState(prevState => ({
			todos: prevState.todos.filter(todo => todo.id !== todoId),
		}));
	};

	render () {
		const { todos } = this.state;

		const totalTodoCount = todos.length;
		const completedTodoCount = todos.reduce(
			(total, todo) => (todo.completed ?total + 1 : total),
			0,
		);

		return (
			<>
			<h1>
				Моя задача
			</h1>

			<div>
				<p>Загальна кількість : {totalTodoCount}</p>
				<p> Кількість виконаних : {completedTodoCount}</p>
			</div>

			<TodoList todos={todos} onDeleteTodo={this.deteleTodo}/>
			</>
		);
	}
}

export default App;
