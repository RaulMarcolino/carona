import { AntDesign, Feather } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs screenOptions={{ tabBarStyle: { backgroundColor: '#000' }, headerStyle: { backgroundColor: '#000' } }}>
            <Tabs.Screen
                name="home"
                options={{
                  title: '',
                  headerTitle: 'Home',
                    headerTitleStyle: {
                        color: '#fff'
                    },
                  tabBarIcon: ({ color }) => <Feather size={28} name="home" color={color} />,
                }}
            />

            <Tabs.Screen
                name="travels"
                options={{
                  title: '',
                  headerTitle: 'Minhas Caronas',
                    headerTitleStyle: {
                        color: '#fff'
                    },
                  tabBarIcon: ({ color }) => <FontAwesome size={28} name="map-o" color={color} />,
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                  title: '',
                  headerTitle: 'Meu Perfil',
                    headerTitleStyle: {
                        color: '#fff'
                    },
                  tabBarIcon: ({ color }) => <AntDesign size={28} name="setting" color={color} />,
                }}
            />
        </Tabs>
    );
}