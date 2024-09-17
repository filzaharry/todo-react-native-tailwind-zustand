import { Tabs } from "expo-router"

export default () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: 'List',
                    headerTitle: 'Home Screen',
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: 'Account',
                    headerTitle: 'My Account',
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