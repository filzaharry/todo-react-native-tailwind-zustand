import { Stack, Tabs } from "expo-router"

export default () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="list"
                options={{
                    tabBarLabel: 'News',
                    headerShown: false
                }}
            />
        </Tabs>
    )
}