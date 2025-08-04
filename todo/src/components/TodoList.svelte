<script lang="ts">
  import TodoItem from './TodoItem.svelte';
  export let todos: Array<{ id: number; text: string; completed: boolean; difficulty: string }> = [];
  export let onToggle: (id: number) => void;
  export let onRemove: (id: number) => void;
</script>

<div>
  {#each todos as todo (todo.id)}
    <TodoItem {todo} on:toggle={() => onToggle(todo.id)} on:remove={() => onRemove(todo.id)} />
  {/each}
</div>
