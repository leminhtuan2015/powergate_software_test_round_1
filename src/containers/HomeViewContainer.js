import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import HomeView from '../components/screens/HomeView.js';

const mapStateToProps = (store) => ({
    store: store
})


//const HomeViewContainer = connect(mapStateToProps, mapDispatchToProps)(HomeView)
const HomeViewContainer = connect(mapStateToProps)(HomeView)

export default HomeViewContainer 
