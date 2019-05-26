import React from 'react';
import { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationScreenProps } from 'react-navigation';

type IFirstScreenProps = NavigationScreenProps;

export class FirstScreen extends Component<IFirstScreenProps> {
  constructor(props: IFirstScreenProps) {
    super(props);
    this.state = {};
  }

  goToSubScreen = () => {
    this.props.navigation.navigate('THIRD_SCREEN');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>
          This is the home screen. Try navigating away and back to this place.
        </Text>
        <Button title={'Go to a subscreen'} onPress={this.goToSubScreen} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
