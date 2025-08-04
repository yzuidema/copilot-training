<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let todo: { id: number; text: string; completed: boolean; difficulty: string };
  const dispatch = createEventDispatcher();
</script>

<div class="todo-item">
  <span class:todo-completed={todo.completed}>{todo.text} <span class="difficulty-label">[{todo.difficulty}]</span></span>
  <div>
    <button class="btn-green" style="margin-right: 0.5em;" on:click={() => dispatch('toggle')}>
      {todo.completed ? 'Undo' : 'Complete'}
    </button>
    <button style="background: #fae7d9; color: #151516;" on:click={() => dispatch('remove')}>Remove</button>
  </div>
</div>
