import { createStackNavigator } from 'react-navigation';
import Login from './src/component/Login';
import Signup from './src/component/Signup';
import Chat from './src/component/Chat';

export default createStackNavigator({
	Login: { screen: Login },
	Signup: { screen: Signup },
	Chat: { screen: Chat }
});