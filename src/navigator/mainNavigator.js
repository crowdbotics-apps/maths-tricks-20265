import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings101337Navigator from '../features/Settings101337/navigator';
import BlankScreen1101332Navigator from '../features/BlankScreen1101332/navigator';
import BlankScreen0101331Navigator from '../features/BlankScreen0101331/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings101337: { screen: Settings101337Navigator },
BlankScreen1101332: { screen: BlankScreen1101332Navigator },
BlankScreen0101331: { screen: BlankScreen0101331Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
