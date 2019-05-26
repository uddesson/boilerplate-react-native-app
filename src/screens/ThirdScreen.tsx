import React from 'react';
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationScreenProps } from 'react-navigation';

type IThirdScreenProps = NavigationScreenProps;

export class ThirdScreen extends Component<IThirdScreenProps> {
  constructor(props: IThirdScreenProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          I'm a subscreen in a stack navigator. You can tell by the back header
          at the top, clicking it will send you back up one level in the
          "stack". Neat huh?
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
