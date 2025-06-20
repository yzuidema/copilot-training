<script>
  // Array of Dutch cheeses
  let cheeses = [
    { name: "Gouda", description: "A mild, yellow cheese made from cow's milk." },
    { name: "Edam", description: "A semi-hard cheese with a mild flavor and pale yellow color." },
    { name: "Leerdammer", description: "A semi-hard cheese with a sweet, nutty flavor." },
    { name: "Maasdam", description: "A Swiss-style Dutch cheese with large holes and a sweet, buttery taste." },
    { name: "Leyden", description: "A spiced cheese flavored with cumin or caraway seeds." },
    { name: "Beemster", description: "A premium Dutch cheese with a rich, creamy flavor." },
    { name: "Roomkaas", description: "A soft, creamy cheese similar to cream cheese." }
  ];

  let newName = '';
  let newDescription = '';

  function addCheese() {
    if (newName.trim() && newDescription.trim()) {
      cheeses = [
        ...cheeses,
        { name: newName, description: newDescription }
      ];
      newName = '';
      newDescription = '';
    }
  }
</script>

<div class="max-w-3xl mx-auto py-12">
  <h1 class="text-3xl font-bold mb-8 text-center">Dutch Cheeses</h1>

  <!-- Add Cheese Form -->
  <form class="mb-8 bg-gray-50 rounded-lg p-6 shadow flex flex-col gap-4"
        on:submit|preventDefault={addCheese}>
    <div>
      <label class="block text-sm font-medium mb-1" for="cheese-name">Cheese Name</label>
      <input
        id="cheese-name"
        class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
        bind:value={newName}
        required
      />
    </div>
    <div>
      <label class="block text-sm font-medium mb-1" for="cheese-desc">Description</label>
      <input
        id="cheese-desc"
        class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
        bind:value={newDescription}
        required
      />
    </div>
    <button
      type="submit"
      class="self-end bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      Add Cheese
    </button>
  </form>

  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {#each cheeses as cheese}
      <li class="bg-white rounded-lg shadow p-6 flex flex-col items-start hover:shadow-lg transition-shadow">
        <h2 class="text-xl font-semibold mb-2">{cheese.name}</h2>
        <p class="text-gray-600">{cheese.description}</p>
      </li>
    {/each}
  </ul>
</div>