import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import StorybookUI from '../storybook/storybook';


const navigationOptions = {
  header: null,
};

const routes = {
  HOME: {
    screen: Home,
    navigationOptions,
  },
  STORYBOOK: {
    screen: StorybookUI,
  },
}
export default createStackNavigator(routes)