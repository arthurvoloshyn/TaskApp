import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask, removeTask, completeTask, changeFilter } from '../../actions/actionCreator';
import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import { Filter, ITask } from '../../types/store';
import { RootState, stateTasks } from '../../types/reducers';
import { ToDoProps, ToDoState } from './types';

import './todo.css';

export const connector = connect(
  ({ tasks, filters }: RootState) => ({
    tasks,
    filters,
  }),
  { addTask, removeTask, completeTask, changeFilter },
);

class ToDo extends Component<ToDoProps, ToDoState> {
  readonly state = {
    taskText: '',
  };

  handleInputChange = ({ target: { value } }: React.FocusEvent<HTMLInputElement>): void => {
    this.setState({
      taskText: value,
    });
  };

  addTask = ({ key }: React.KeyboardEvent<HTMLInputElement>): void => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === 'Enter') {
      const { addTask } = this.props;
      const task: ITask = {
        id: new Date().getTime(),
        text: taskText,
        isCompleted: false,
      };
      addTask(task);
      this.setState({
        taskText: '',
      });
    }
  };

  filterTasks = (tasks: stateTasks, activeFilter: Filter): stateTasks => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(({ isCompleted }) => isCompleted);
      case 'active':
        return tasks.filter(({ isCompleted }) => !isCompleted);
      default:
        return tasks;
    }
  };

  getActiveTasksCounter = (tasks: stateTasks): number =>
    tasks.filter(({ isCompleted }) => !isCompleted).length;

  render(): React.ReactElement<ToDoProps> {
    const { taskText } = this.state;
    const { tasks = [], removeTask, completeTask, filters, changeFilter } = this.props;
    const isTasksExist: boolean = tasks.length > 0;
    const filteredTasks: stateTasks = this.filterTasks(tasks, filters);
    const taskCounter: number = this.getActiveTasksCounter(tasks);

    return (
      <div className="todo-wrapper">
        <ToDoInput onChange={this.handleInputChange} onKeyPress={this.addTask} value={taskText} />
        {isTasksExist && (
          <>
            <ToDoList
              completeTask={completeTask}
              removeTask={removeTask}
              tasksList={filteredTasks}
            />
            <Footer activeFilter={filters} amount={taskCounter} changeFilter={changeFilter} />
          </>
        )}
      </div>
    );
  }
}

export default connector(ToDo);
