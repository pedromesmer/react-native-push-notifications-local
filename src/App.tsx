import React from 'react';
import { View, Text } from 'react-native';

const App: React.FC = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ fontSize: 30 }}>Hello world</Text>
  </View>
);
export default App;
