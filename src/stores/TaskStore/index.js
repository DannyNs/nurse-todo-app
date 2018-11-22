import {
  observable, action,
} from 'mobx';
import Task from './Task';

export class TasksStore {
  @observable
  tasks = [];

  constructor() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.tasks = [
      new Task({
        id: 1,
        name: 'Brian Adams',
        description: 'Change pillow',
        time: Date.parse('Aug 9, 1995'),
        done: true,
      }),
      new Task({
        id: 2,
        name: 'Bob Dylan',
        description: 'Make bed',
        time: Date.parse('Aug 9, 1995') + 1000,
        done: false,
      }),
    ];
  }

  @action addNewTask = (newTask) => {
    this.tasks = this.tasks
      .concat(new Task(Object.assign(newTask, { id: this.tasks.length + 1 })));

    newTask.clearData();
  }
}

const tasksStore = new TasksStore();
export default tasksStore;
