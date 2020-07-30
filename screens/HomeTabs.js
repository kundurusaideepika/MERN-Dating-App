import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
// components
import TabBarIcon from '../components/TabBarIcon';
import images from '../components/Images';
import ProfileScreen from './ProfileScreen';
import NotificationsScreen from './NotificationsScreen';
import MessagesScreen from './MessagesScreen';
import SearchScreen from './SearchScreen';
import DrawerScreen from './DrawerScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused ? images.profilHommeActif : images.profilHomme;
          } else if (route.name === 'Recherche') {
            iconName = focused ? images.rechercheActif : images.recherche;
          } else if (route.name === 'Drawer') {
            iconName = focused ? images.menuIconActif : images.menuIcon;
          } else if (route.name === 'Messages') {
            iconName = focused ? images.messageActif : images.message;
          } else if (route.name === 'Notifications') {
            iconName = focused
              ? images.notificationsActif
              : images.notifications;
          }
          return route.name === 'Drawer' ? (
            <TabBarIcon
              pathIcon={iconName}
              onPressTab={() => navigation.openDrawer()}
            />
          ) : (
            <TabBarIcon
              pathIcon={iconName}
              onPressTab={() => navigation.navigate(route.name)}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: true,
        style: {
          backgroundColor: '#5dbcd2',
          height: 60,
        },
      }}>
      <Drawer.Screen name="Drawer" component={DrawerScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Recherche" component={SearchScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

export default Home;