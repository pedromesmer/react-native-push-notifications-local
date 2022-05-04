import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

import { PushNotification } from './config/pushNotification';

const App: React.FC = () => {
  const testPush = () => {
    PushNotification.localNotification({
      channelId: 'channel-id',
      title: 'Notificação de teste',
      message: 'A notificação local deu certo 😁',
    });
  };

  const testSheduledPush = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'channel-id',
      title: 'Notificação de teste',
      message: 'A notificação local AGENDADA deu certo 😁',

      date: new Date(Date.now() + 5 * 1000),
      allowWhileIdle: false,

      repeatTime: 1,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: '#151515',
          marginBottom: 5,
          textAlign: 'left',
          width: 300,
        }}
      >
        Notificação instantânea:
      </Text>
      <TouchableOpacity
        style={{
          width: 300,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ff955f',
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={testPush}
      >
        <Text style={{ fontSize: 25, color: '#f5f5f5' }}>Clique aqui</Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 20,
          color: '#151515',
          marginBottom: 5,
          textAlign: 'left',
          width: 300,
        }}
      >
        Notificação agendada (5 seg):
      </Text>

      <TouchableOpacity
        style={{
          width: 300,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ff955f',
          borderRadius: 5,
        }}
        onPress={testSheduledPush}
      >
        <Text style={{ fontSize: 25, color: '#f5f5f5' }}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};
export default App;
