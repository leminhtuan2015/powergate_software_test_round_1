import {StackNavigator} from 'react-navigation';

import HomeViewContainer from '../../containers/HomeViewContainer';

export const styleHeader = {
    backgroundColor: 'transparent',
    position: 'absolute',
    height: 50,
    top: 0,
    left: 0,
    right: 15,
    borderBottomWidth: 0,
}

const StackDrawerNavigatorView = StackNavigator(
    {
        HomeView: {
            screen: HomeViewContainer,
        },
    },
    {
        //headerMode: 'none',
    }
);

export default StackDrawerNavigatorView
