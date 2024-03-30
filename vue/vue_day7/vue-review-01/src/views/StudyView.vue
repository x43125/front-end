<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>

    <div>
      <button @click="addRow">Add Row</button>
      <table border="1px">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 35 }
      ]
    };
  },
  methods: {
    addRow() {
      // 添加一行数据
      this.items.push({ name: 'Sam', age: 0 });
    }
  }
};
</script>