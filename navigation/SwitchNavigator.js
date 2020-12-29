import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../Compement/Login'
import Signup from '../Compement/Signup'
import Profile from '../Compement/Profile'

const SwitchNavigator = createSwitchNavigator(
    {
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)