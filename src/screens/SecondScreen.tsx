import React from 'react';
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationScreenProps } from 'react-navigation';

type ISecondScreenScreenProps = NavigationScreenProps;

export class SecondScreen extends Component<ISecondScreenScreenProps> {
  constructor(props: ISecondScreenScreenProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          I'm another screen accessible from the bottom tab navigator.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
