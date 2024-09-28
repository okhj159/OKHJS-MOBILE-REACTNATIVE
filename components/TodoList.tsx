import React from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import TodoItem from './TodoItem';

function TodoList({todos, onToggle}) {
    return (
        <FlatList
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            style={styles.list}
            data={todos}
            renderItem={({item}) => (
                <TodoItem
                    id={item.id}
                    text={item.text}
                    done={item.done}
                    onToggle={onToggle}
                />
            )}
            keyExtractor={item => item.id.toString()}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    separator: {
        backgroundColor: '#e0e0e0',
        height: 1,
    },
});

export default TodoList;
