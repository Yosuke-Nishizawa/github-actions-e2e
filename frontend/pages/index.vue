<template>
  <div class="container">
    <h1>GitHub Actions E2E テスト</h1>
    <div class="todo-app">
      <div class="todo-input">
        <input 
          v-model="newTask" 
          placeholder="新しいタスクを入力" 
          @keyup.enter="addTask"
          data-test="new-task-input"
        />
        <button @click="addTask" data-test="add-task-button">追加</button>
      </div>
      <ul class="todo-list">
        <li v-for="(task, index) in tasks" :key="index" class="todo-item" :data-test="'todo-item-' + index">
          <span :class="{ completed: task.completed }">{{ task.title }}</span>
          <div>
            <button @click="toggleTask(index)" data-test="toggle-button">{{ task.completed ? '未完了' : '完了' }}</button>
            <button @click="removeTask(index)" data-test="delete-button">削除</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTask = ref('')
const tasks = ref([
  { title: 'タスク1', completed: false },
  { title: 'タスク2', completed: true },
  { title: 'タスク3', completed: false }
])

function addTask() {
  if (newTask.value.trim()) {
    tasks.value.push({
      title: newTask.value,
      completed: false
    })
    newTask.value = ''
  }
}

function toggleTask(index) {
  tasks.value[index].completed = !tasks.value[index].completed
}

function removeTask(index) {
  tasks.value.splice(index, 1)
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
h1 {
  text-align: center;
  margin-bottom: 30px;
}
.todo-app {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.todo-input {
  display: flex;
  margin-bottom: 20px;
}
input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
}
button {
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
}
.todo-list {
  list-style: none;
  padding: 0;
}
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.todo-item:last-child {
  border-bottom: none;
}
.completed {
  text-decoration: line-through;
  color: #888;
}
.todo-item button {
  margin-left: 5px;
  padding: 5px 10px;
  border-radius: 4px;
}
.todo-item button:first-child {
  background-color: #2196f3;
}
.todo-item button:last-child {
  background-color: #f44336;
}
</style> 
