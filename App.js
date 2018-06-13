import React, { Component } from 'react';
import { FlatList, Image, ScrollView, Alert, Button, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    _onLongPressButton() {
        Alert.alert('You long-pressed the button!')
    }


    render() {
      const picUrl = { uri: 'http://i0.wp.com/sandiegobmwrepair.com/wp-content/uploads/2015/11/cropped-favicon.png?fit=512%2C512' }
      return (
            /*<View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>{'TouchableHighlight'.toUpperCase()}</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> TouchableHighlight</Text>
                    </View>
                </TouchableOpacity>
            </View>*/
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image source={picUrl} style={{width: 193, height: 110}}/>
                <Image source={picUrl} style={{width: 193, height: 110}}/>
                <Image source={picUrl} style={{width: 193, height: 110}}/>
                <Image source={picUrl} style={{width: 193, height: 110}}/>
                <Image source={picUrl} />
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Image source={picUrl} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
            /*<View style = {styles.container}>
                <FlatList
                    data ={[
                      {key: 'Devin'},
                      {key: 'Devin'},
                      {key: 'Devin'},
                      {key: 'Devin'}
                    ]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>*/
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center'
    },
    buttonText: {
        padding: 20,
        color: 'white',
        backgroundColor: '#2196F3',
        fontWeight: '700'
    }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Touchables);
