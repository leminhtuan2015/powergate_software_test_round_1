import {StackNavigator} from 'react-navigation';

import StackDrawerNavigatorView from '../components/screens/StackNavigatorView';

const init = "RootStack"

const RootNavigatorView = StackNavigator({
    RootStack: {screen: StackDrawerNavigatorView},
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: init
})


export default RootNavigatorView
