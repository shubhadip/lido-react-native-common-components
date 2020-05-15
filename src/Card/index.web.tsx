import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });


interface Iprops {
  text?: string
};

const CardWeb : React.FunctionComponent<Iprops> = (props) => {
    return (
        <View>
            <Text>I am Card Web</Text>
        </View>
    )
}

export default CardWeb;