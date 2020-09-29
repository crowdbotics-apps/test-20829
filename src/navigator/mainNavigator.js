import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings115893Navigator from '../features/Settings115893/navigator';
import Settings115888Navigator from '../features/Settings115888/navigator';
import UserProfile115881Navigator from '../features/UserProfile115881/navigator';
import Settings115880Navigator from '../features/Settings115880/navigator';
import Settings115878Navigator from '../features/Settings115878/navigator';
import SignIn2115876Navigator from '../features/SignIn2115876/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings115893: { screen: Settings115893Navigator },
Settings115888: { screen: Settings115888Navigator },
UserProfile115881: { screen: UserProfile115881Navigator },
Settings115880: { screen: Settings115880Navigator },
Settings115878: { screen: Settings115878Navigator },
SignIn2115876: { screen: SignIn2115876Navigator },

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
