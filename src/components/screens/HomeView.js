import React, {Component} from 'react';

import {
    FormInput,
    Button,
} from 'react-native-elements'

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
    Alert,
} from 'react-native'

import * as ActionTypes from "../../constants/ActionTypes"
import {styleStackHeader} from "../../utils/Constant.js"
import MyTextInput from "../views/MyTextInput";

class HomeView extends Component<{}> {

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state

        return {
            headerTitle: "",
            title: "",
            headerTintColor: "white",
            headerStyle: styleStackHeader,
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            text: "",
            subtext: "",
        }
    }

    checkMatching = () => {
        if (!this.state.text || !this.state.subtext) {
            Alert.alert(
                'Notification',
                'Please Fill The Input',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false}
            )

            return
        }

        this.props.dispatch({
            type: ActionTypes.DATA_CHECK_MATCHING,
            data: {text: this.state.text, subtext: this.state.subtext}
        })
    }

    onTextChange = (text) => {
        this.setState({text: text})
    }

    onSubTextChange = (text) => {
        this.setState({subtext: text})
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../resources/images/background_2.jpg')}
                    style={styles.backgroundImage}>

                    <ScrollView style={{flex: 1}}>
                        <View style={styles.contentContainer}>

                            <MyTextInput
                                value={this.state.text}
                                placeholder="Text"
                                onChangeText={(text) => {
                                    this.onTextChange(text)
                                }} />

                            <Text/>

                            <MyTextInput
                                value={this.state.subtext}
                                placeholder="Subtext"
                                onChangeText={(text) => {
                                    this.onSubTextChange(text)
                                }} />

                            <Text/>

                            <Button
                                rounded={true}
                                onPress={() => {
                                    this.checkMatching()
                                }}
                                title="Check"
                                borderRadius={5}
                                color="white"
                                backgroundColor="#4CAF50"
                                buttonStyle={{alignItems: "center"}}
                            />

                            <Text/>

                            <Text style={styles.titleText}>
                                Output : {
                                this.props.store.dataState.arrayMatchedIndex.length ?
                                    (this.props.store.dataState.arrayMatchedIndex + "") :
                                    "Not Match"
                            }
                            </Text>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flex: 1,
    },

    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },

    contentContainer: {
        flex: 1,
        marginTop: 80,
        justifyContent: 'flex-start',
    },

    titleText: {
        marginLeft: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: "#ffffff",
    },

    white: {
        color: "#ffffff",
    },
});

export default HomeView







