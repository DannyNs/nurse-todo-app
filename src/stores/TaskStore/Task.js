import {
  observable, action,
} from 'mobx';

export default class Task {
  id = null;

  name = '';

  description = '';

  time = new Date().getTime();

  @observable
  done = false;

  constructor(source) {
    Object.assign(this, source);
  }

  @action markAsDone = () => {
    this.done = true;
  }
}
