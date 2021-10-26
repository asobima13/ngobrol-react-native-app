import React from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

const OnboardingScreen = ({navigation}) => {

    const Dots = ({selected}) => {
        let backgroundColor;

        backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)'

        return (
            <View 
                style={{
                    borderRadius: 100,
                    width: 6,
                    height: 6,
                    marginHorizontal: 3,
                    backgroundColor
                }}
            />
        )
    }

    const Skip = ({...props}) => (
        <TouchableOpacity
            style={{
                marginHorizontal:16
            }}
            title='Skip'
            color='#000'
            {...props}
        >
            <Text style={{
                fontSize: 16,
                color: '#000'
            }}>Skip</Text>
        </TouchableOpacity>
    )
    
    const Next = ({...props}) => (
        <TouchableOpacity
            style={{
                marginHorizontal:16
            }}
            title='Next'
            color='#000'
            {...props}
        >
            <Text style={{
                fontSize: 16,
                color: '#000'
            }}>Next</Text>
        </TouchableOpacity>
    )
    
    const Done = ({...props}) => (
        <TouchableOpacity
            style={{
                marginHorizontal:16
            }}
            title='Done'
            color='#000'
            {...props}
        >
            <Text style={{
                fontSize: 16,
                color: '#000'
            }}>Done</Text>
        </ TouchableOpacity>
    )

    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace('Login')}
        onDone={() => navigation.navigate('Login')}
            pages={[
                {
                backgroundColor: '#a6e4d0',
                image: <Image source={require('../assets/images/onboarding-img1.png')} />,
                title: 'Connect To The World',
                subtitle: 'A New Way To Connect With The World',
                },
                {
                backgroundColor: '#fdeb93',
                image: <Image source={require('../assets/images/onboarding-img2.png')} />,
                title: 'Share Your Favorites',
                subtitle: 'Share Your Thoughts With Similar Kind of People',
                },
                {
                backgroundColor: '#e9bcbe',
                image: <Image source={require('../assets/images/onboarding-img3.png')} />,
                title: 'Become The Star',
                subtitle: 'Let The Spot Light Capture You',
                },
            ]}
/>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
