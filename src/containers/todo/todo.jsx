import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTask, removeTask, completeTask, changeFilter } from '../../actions/actionCreator';
import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';
import './todo.css';

class ToDo extends Component {
  static propTypes = {
    changeFilter: PropTypes.func,
    tasks: PropTypes.array,
    removeTask: PropTypes.func,
    filters: PropTypes.string,
    completeTask: PropTypes.func,
    addTask: PropTypes.func
  };

  static defaultProps = {
    changeFilter: () => {},
    tasks: [],
    removeTask: () => {},
    filters: 'all',
    completeTask: () => {},
    addTask: () => {}
  };

  state = {
    taskText: ''
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value
    });
  };

  addTask = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === 'Enter') {
      const { addTask } = this.props;
      addTask(new Date().getTime(), taskText, false);
      this.setState({
        taskText: ''
      });
    }
  };

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(({ isCompleted }) => isCompleted);
      case 'active':
        return tasks.filter(({ isCompleted }) => !isCompleted);
      default:
        return tasks;
    }
  };

  getActiveTasksCounter = tasks => tasks.filter(({ isCompleted }) => !isCompleted).length;

  render() {
    const { taskText } = this.state;
    const { tasks, removeTask, completeTask, filters, changeFilter } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const taskCounter = this.getActiveTasksCounter(tasks);

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText} />
        {isTasksExist && (
          <ToDoList completeTask={completeTask} tasksList={filteredTasks} removeTask={removeTask} />
        )}
        {isTasksExist && (
          <Footer changeFilter={changeFilter} amount={taskCounter} activeFilter={filters} />
        )}
      </div>
    );
  }
}

export default connect(
  ({ tasks, filters }) => ({
    tasks,
    filters
  }),
  { addTask, removeTask, completeTask, changeFilter }
)(ToDo);
