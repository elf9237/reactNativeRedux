/**
 * 启动入口文件
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';
import configureStore from '../store/ConfigureStore';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
} from 'react-native';

const store = configureStore();

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<CounterApp />
			</Provider>
			);
	}
}