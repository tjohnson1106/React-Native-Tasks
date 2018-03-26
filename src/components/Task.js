import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class Task extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.task}>
        <Text style={styles.taskText}>{this.props.val.date}</Text>
        <Text style={styles.taskText}>{this.props.val.task}</Text>
        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.taskDelete}
        >
          <Text style={style.taskDeleteText}>D</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Task;
