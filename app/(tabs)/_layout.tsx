import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
               
            />
            <Tabs.Screen
                name="settings"
                
            />

            <Tabs.Screen
                name="travels"
                
            />
        </Tabs>
    );
}