import React from 'react';
import { Text, TextInput, View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from '../Styles/CreateTodoStyle';

export class CreateTodo extends React.Component {
    todoCounter = 0;
    editMode = false;
    selectedTodo;

    constructor(props) {
        super(props);
        this.state = {
            todoValue: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        if (!this.state.todoValue) return;
        if (this.editMode) {
            this.updateTodo();
        } else {
            this.saveTodo();
        }
        this.setState({todoValue: ''});
        this.refs.todoInput.blur();
    }

    updateTodo() {
        this.editMode = false;
        this.props.onTodoUpdated({value: this.state.todoValue, id: this.selectedTodo.id});
    }

    saveTodo() {
        this.todoCounter++;
        this.props.onTodoCreated({value: this.state.todoValue, id: this.todoCounter.toString()});
    }

    componentWillReceiveProps(newProps) {
        if (newProps.selectedTodo) {
            this.editMode = true;
            this.selectedTodo = newProps.selectedTodo;
            this.setState({
                todoValue: this.selectedTodo.value
            });
        }
    }

    render() {
        return (
            <View style={styles.mainView}>
                <TextInput style={styles.inputField} placeholder="What to do.." ref="todoInput"
                    placeholderTextColor="#ffffff" selectionColor="#484848" underlineColorAndroid="#484848"
                    value={this.state.todoValue} onChangeText={text => this.setState({todoValue: text})} />
                <TouchableNativeFeedback onPress={this.onSubmit}
                    hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}>
                    <View style={styles.button}>
                        <Icon name="send" size={30} color="#FD8856" />
                    </View>
                </TouchableNativeFeedback>
                
            </View>
        );
    }
}
