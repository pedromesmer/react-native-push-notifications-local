import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

import { PushNotification } from './config/pushNotification';

const App: React.FC = () => {
  const testPush = () => {
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: 'channel-id', // (required) channelId, if the channel doesn't exist, notification will not trigger.
      title: 'Notificação de teste',
      message: 'A notificação local deu certo 😁', // (required)
    });
  };

  const testSheduledPush = () => {
    PushNotification.localNotificationSchedule({
      /* Android Only Properties */
      channelId: 'channel-id', // (required) channelId, if the channel doesn't exist, notification will not trigger.
      title: 'Notificação de teste',
      message: 'A notificação local AGENDADA deu certo 😁', // (required)

      date: new Date(Date.now() + 5 * 1000), // in 5 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false

      /* Android Only Properties */
      repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
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
