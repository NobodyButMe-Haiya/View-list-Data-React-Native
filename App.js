import React from 'react';
import { Text, View, FlatList, ScrollView, SafeAreaView } from 
'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
var data = [
  { "name": "A", "age": "20" },
  { "name": "B", "age": "30" },
  { "name": "C", "age": "40" },
  { "name": "D", "age": "50" },
  { "name": "E", "age": "60" },
  { "name": "F", "age": "70" },
  { "name": "G", "age": "80" },
  { "name": "H", "age": "90" },
  { "name": "I", "age": "100" },
  { "name": "J", "age": "110" },
  { "name": "K", "age": "120" },
  { "name": "L", "age": "130" },
  { "name": "M", "age": "140" },
  { "name": "N", "age": "150" },
  { "name": "O", "age": "160" },
  { "name": "P", "age": "170" },
  { "name": "Q", "age": "180" },
  { "name": "R", "age": "190" },
  { "name": "S", "age": "200" },
  { "name": "T", "age": "210" },
  { "name": "U", "age": "220" },
  { "name": "V", "age": "230" },
  { "name": "W", "age": "240" },
  { "name": "X", "age": "250" },
  { "name": "Y", "age": "260" },
  { "name": "Z", "age": "270" }

];

const renderItem = ({ item }) => {
  return <View style={{ padding: 20 }}>
    <Text>Name : {item.name}</Text>
    <Text> Age : {item.age}</Text>
  </View>
}
function PushArrayScreen() {
  var sample = [];
  for (var i = 0; i < 100; i++) {
    sample.push(
      <View key={i} style={{ padding: 10 }}>
        <Text>Counter {i}</Text>
      </View>
    );
  }
  return (
    <ScrollView style={{ width: '100%' }}>
      {sample}
    </ScrollView>
  );
}

function MapScreen() {
  return (
    <SafeAreaView>
      <Text>Why empty </Text>
      <ScrollView>
      {data.map((item, index) => {
        return <View key={index} style={{ padding: 20 }}>
              <Text> Name Loop : {item.name}</Text>
              <Text> Age Loop : {item.age}</Text>
            </View>
      })}
      </ScrollView>
    </SafeAreaView>
  );
}

function FlatListSampleScreen() {

  return (
    <SafeAreaView >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Push Array" component={PushArrayScreen} />
      <Tab.Screen name="Map Array" component={MapScreen} />
      <Tab.Screen name="Flat List" component={FlatListSampleScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

