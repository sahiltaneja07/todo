import React from 'react';
import { Text, View, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from '../Styles/TodoStyle';

export class Todo extends React.Component {
    swipeable = null;

    constructor() {
        super();
        this.deleteTodo = this.deleteTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }

    deleteTodo() {
        this.props.onDeleteTodo(this.props.todo);
    }

    editTodo() {
        this.swipeable.recenter();
        this.props.onEditTodo(this.props.todo);
    }

    render() {
        const editButton = [
            <TouchableNativeFeedback onPress={this.editTodo} >
                <View style={styles.editButtonView}>
                    <Icon name="edit" size={30} color="red" />
                </View>
            </TouchableNativeFeedback>
        ];

        const deleteButton = [
            <TouchableNativeFeedback onPress={this.deleteTodo} >
                <View>
                    <Icon name="database" size={30} color="red" />
                </View>
            </TouchableNativeFeedback>
        ];

        return (
            <View>
                <Swipeable onRef={ref => this.swipeable = ref} leftButtons={editButton} rightButtons={deleteButton}>
                    <Text style={styles.todoText}>{this.props.todo.value}</Text>
                </Swipeable>
            </View>
        );
    }
}
