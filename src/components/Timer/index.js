import { View, Text } from 'react-native'
import React, { useState, useEffect }  from 'react'

export const LoginTimer = () => {
  const [timerValue, setTimerValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerValue(prevValue => prevValue + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
      <Text>Login Timer: {timerValue}</Text>
    </View>
  );
};

export const LogoutTimer = () => {
  const [timerValue, setTimerValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerValue(prevValue => prevValue + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
      <Text>Login Timer: {timerValue}</Text>
    </View>
  );
};

