import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import ShopScreen from '../screens/ShopScreen';
import AccountScreen from '../screens/AccountScreen';
import Notification from '../screens/NotificationScreen';


const Tab = createBottomTabNavigator();

const TabArr = [
    { route: 'Trang chủ', label: 'Home', name: 'home', activeColor: '#FFF', inActiveColor: '#393939', component: HomeScreen },
    { route: 'Tin tức', label: 'News', name: 'file', activeColor: '#FFF', inActiveColor: '#393939', component: NewsScreen },
    { route: 'Vett Shop', label: 'Shop', name: 'circle', activeColor: '#FFF', inActiveColor: '#393939', component: ShopScreen },
    { route: 'Thông báo', label: 'Notification', name: 'bell', activeColor: '#FFF', inActiveColor: '#393939', component: Notification },
    { route: 'Tài khoản', label: 'Account', name: 'user', activeColor: '#FFF', inActiveColor: '#393939', component: AccountScreen },
];
const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 60,
                borderTopEndRadius: 10,
                borderTopStartRadius: 10,
                backgroundColor: '#154a8f',
                
            }
        }}>
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                        tabBarLabel={item.label}
                        options={{
                            tabBarShowLabel: true,
                            tabBarIcon: ({ color, focused }) => (
                                // <Icons type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={"black"} size={22} />)
                                <Icons name={item.name} color={focused ? item.activeColor : item.inActiveColor} size={25} />),
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({})

