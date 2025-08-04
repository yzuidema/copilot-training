<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let newTodo: string = '';
  let newDifficulty: 'easy' | 'normal' | 'hard' = 'easy';

  function handleAdd() {
    if (newTodo.trim()) {
      dispatch('add', { text: newTodo, difficulty: newDifficulty });
      newTodo = '';
      newDifficulty = 'easy';
    }
  }
</script>

<form on:submit|preventDefault={handleAdd} style="display: flex; align-items: center; flex-wrap: wrap; gap: 0.5em;">
  <input type="text" bind:value={newTodo} placeholder="Add a new task..." />
  <select bind:value={newDifficulty} class="difficulty-select">
    <option value="easy">Easy</option>
    <option value="normal">Normal</option>
    <option value="hard">Hard</option>
  </select>
  <button type="submit" class="btn-green">Add</button>
</form>
