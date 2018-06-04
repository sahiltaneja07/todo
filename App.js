import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { CreateTodo } from './App/Components/CreateTodo';
import { Header } from './App/Components/Header';
import { Todos } from './App/Components/Todos';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewTodo = this.handleNewTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.state = {
            todos: [],
            selectedTodo: null
        };
    }

    handleNewTodo(todo) {
        let todos = this.state.todos.map(x => x);
        todos.push(todo);
        this.setState({todos});
    }

    editTodo(todo) {
        this.setState({selectedTodo: todo});
    }

    updateTodo(todo) {
        let todos = this.state.todos.map(x => x);
        let todoToBeUpdated = todos.find(x => x.id === todo.id);
        todoToBeUpdated.value = todo.value;
        this.setState({todos, selectedTodo: null});
    }

    deleteTodo(todo) {
        let todos = this.state.todos.map(x => x);
        let indexOfTodo = todos.findIndex(x => x.id === todo.id);
        todos.splice(indexOfTodo, 1);
        this.setState({todos});
    }

    render() {
        return (
            <ImageBackground source={require('./Assets/images/blue-sky.jpg')} style={styles.backgroundImage}>
                <Header />
                <CreateTodo onTodoCreated={this.handleNewTodo}
                    onTodoUpdated={this.updateTodo} selectedTodo={this.state.selectedTodo} />
                <Todos todos={this.state.todos} onEditTodo={this.editTodo} onDeleteTodo={this.deleteTodo} />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1
    }
});
