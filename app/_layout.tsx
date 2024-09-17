import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'

const StackLayout = () => {
  const router = useRouter()
  return (
    <Stack
        screenOptions={{
            headerStyle: {
                backgroundColor: "#10101E"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}
    >
        <Stack.Screen name='index' options={{headerTitle:'login', headerShown:false}} />
        <Stack.Screen name='register' 
        options={{
            headerTitle:'Create Account', 
            headerRight:() => <Button title='Open' onPress={
                () => {
                    router.push('/modal');
                }
            }
            />}} />
        <Stack.Screen name='modal' options={{ presentation:'modal',
            headerLeft:() => <Button title='Close' onPress={
                () => {
                    router.back();
                }
            }
            />}} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  )
}

export default StackLayout