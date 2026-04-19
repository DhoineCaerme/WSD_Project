import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchTasks() {
      this.loading = true
      try {
        const response = await fetch('/api/tasks')
        const data = await response.json()
        this.tasks = data.items ?? data
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },

    async createTask(task) {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      })
      await this.fetchTasks()
      return response
    },

    async deleteTask(id) {
      await fetch(`/api/tasks/${id}`, { method: 'DELETE' })
      await this.fetchTasks()
    }
  }
})