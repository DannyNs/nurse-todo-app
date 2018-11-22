import {
  observable, action,
} from 'mobx';

export default class NewTask {
  @observable
  name = '';

  @observable
  description = '';

  constructor(source) {
    Object.assign(this, source);
  }

  @action clearData = () => {
    this.name = '';
    this.description = '';
  }

  @action setName = (newName) => {
    this.name = newName;
  }

  @action setDescription = (newDescription) => {
    this.description = newDescription;
  }
}
