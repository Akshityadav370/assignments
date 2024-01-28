/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(indexOfTodo) {
    // Use splice to remove the element at the specified index
    this.todos.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    // Check if the index is valid before updating
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    // Check if the index is valid before returning
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return null; // Return null for invalid indexes
  }
  clear() {
    this.todos.length = 0;
  }
}

module.exports = Todo;
