<script lang="ts">
  import { onMount } from 'svelte';
  import todosData from './todos.json';
  import TodoForm from './components/TodoForm.svelte';
  import TodoList from './components/TodoList.svelte';
  import Score from './components/Score.svelte';

  type Difficulty = 'easy' | 'normal' | 'hard';
  type Todo = {
    id: number;
    text: string;
    completed: boolean;
    difficulty: Difficulty;
  };

  let todos: Todo[] = [];
  let score: number = 0;

  const points = { easy: 10, normal: 20, hard: 40 };

  onMount(() => {
    todos = todosData.todos.map((t: any) => ({ ...t, difficulty: t.difficulty || 'easy' }));
  });

  function addTodoHandler(e: CustomEvent<{ text: string; difficulty: Difficulty }>) {
    const { text, difficulty } = e.detail;
    todos = [
      ...todos,
      { id: Date.now(), text, completed: false, difficulty }
    ];
  }

  function toggleTodoHandler(id: number) {
    todos = todos.map(todo => {
      if (todo.id === id && !todo.completed) {
        score += points[todo.difficulty];
        return { ...todo, completed: true };
      } else if (todo.id === id && todo.completed) {
        score -= points[todo.difficulty];
        return { ...todo, completed: false };
      }
      return todo;
    });
  }

  function removeTodoHandler(id: number) {
    const todo = todos.find(t => t.id === id);
    if (todo && todo.completed) {
      score -= points[todo.difficulty];
    }
    todos = todos.filter(todo => todo.id !== id);
  }
</script>

<main>
  <h1>Todo App</h1>
  <div class="card">
    <TodoForm on:add={addTodoHandler} />
    <TodoList {todos} onToggle={toggleTodoHandler} onRemove={removeTodoHandler} />
    <Score {score} />
  </div>
</main>

<style>
  h1 {
    text-align: center;
    color: #333;
  }

  .card {
    max-width: 600px;
    margin: 2em auto;
    padding: 1.5em;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
  }

  input[type="text"] {
    flex: 1;
    padding: 0.75em;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1em;
  }
</style>
