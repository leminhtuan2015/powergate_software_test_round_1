import React, {Component} from 'react'
import {
    FormInput,
} from 'react-native-elements'

const MyTextInput = (props) => {

    return (
        <FormInput
            key="text"
            value={props.value}
            inputStyle={{color: "#2196f3", marginLeft: 20}}
            containerStyle={{backgroundColor: "#fafafa"}}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            autoCorrect={false}
            defaultValue=""/>
    )
}
export default MyTextInput
