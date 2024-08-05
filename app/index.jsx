import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-600">
      <Text className="text-3xl">Android!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color:'blue'}}>Go To Profile</Link>
    </View>
  );
}


