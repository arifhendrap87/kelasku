import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { BaseColor, useTheme, useFont } from '@config';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Icon } from '@components';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from "react-native-vector-icons/FontAwesome5";
// Icon.loadFont();
/* Bottom Screen */
// import Home from '@screens/Home';
// import Booking from '@screens/Booking';
// import Messenger from '@screens/Messenger';
// import Post from '@screens/Post';





function Home() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

function Booking() {
  return (
    <View>
      <Text>Bookin Screen</Text>
    </View>
  );
}

function Messenger() {
  return (
    <View>
      <Text>Messenger Screen</Text>
    </View>
  );
}

function Post() {
  return (
    <View>
      <Text>Post Screen</Text>
    </View>
  );
}

function Profile() {
  return (
    <View>
      <Text>About Screen</Text>
    </View>
  );
}


//untuk instalasi main stack
const MainStack = createNativeStackNavigator();


//untuk instalasi main stack
const BottomTab = createBottomTabNavigator();


//untuk instalasi roo stack
const RootStack = createNativeStackNavigator();


function Main() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BottomTabNavigator">
      <MainStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
    </MainStack.Navigator>
  );
}

function BottomTabNavigator() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const font = useFont();
  const auth = useSelector(state => state.auth);
  const login = auth.login.success;

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: BaseColor.grayColor,
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: font,
          paddingBottom: 2,
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          // title: t('home'),
          title: 'Home',
          tabBarIcon: ({ color }) => {
            return <Icon name="address-book" size={20} color="#A6A6A6" />;
          },
        }}
      />



      <BottomTab.Screen
        name="Booking"
        component={Booking}
        options={{
          title: t('booking'),
          tabBarIcon: ({ color }) => {
            return <Icon color={color} name="bookmark" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="Messenger"
        component={Messenger}
        options={{
          title: t('message'),
          tabBarIcon: ({ color }) => {
            return <Icon solid color={color} name="envelope" size={20} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Post"
        component={Post}
        options={{
          title: t('news'),
          tabBarIcon: ({ color }) => {
            return <Icon color={color} name="copy" size={20} solid />;
          },
        }}
      />

    </BottomTab.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          // Set custom animation for screen transitions
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}>
        {/* Define Bottom BottomTab Screens */}
        <RootStack.Screen name="Main" component={Main} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
