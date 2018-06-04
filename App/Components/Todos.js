import React from 'react';
import { Text, View, TouchableNativeFeedback, FlatList } from 'react-native';

import { styles } from '../Styles/TodosStyle';
import { Todo } from './Todo';

export class Todos extends React.Component {

    constructor() {
        super();
        this.deleteTodo = this.deleteTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }

    deleteTodo(todo) {
        this.props.onDeleteTodo(todo);
    }

    editTodo(todo) {
        this.props.onEditTodo(todo);
    }

    render() {
        return (
            <View style={styles.mainView}>
                <FlatList
                    data={this.props.todos} 
                    renderItem={({item}) => <Todo todo={item} onEditTodo={this.editTodo} onDeleteTodo={this.deleteTodo} />}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={item => <View style={styles.itemSeparator} />}
                />
            </View>
        );
    }
}
