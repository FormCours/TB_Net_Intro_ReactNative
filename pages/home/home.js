import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native"

const style = StyleSheet.create({
    image: {
        width: '100%',
        height: 250,
    }
})

const Home = () => {

    return (
        <View style={{flex:1}}>
            <Text>Home</Text>
            <Image
              style={style.image}
              resizeMode='contain'
              source={require('./Della_Duck.jpg')}
            />
            
        </View>
    )
}

export default Home;