import {StyleSheet, Text} from 'react-native';
import React from 'react';

const TimerCount = ({time, blink}) => {
  
  const remainingTime = remain => {
    const minutes = Math.floor(remain / 60);
    const seconds = remain % 60;

    return `${minutes}:${seconds}`;
  };

  return (
    <Text
      style={[
        styles.countDownText,
        {
          color: time === 0 ? '#222' : time <= 20 ? 'red' : '#222',
          opacity: blink ? 1 : 0,
        },
      ]}>
      {remainingTime(time)}
    </Text>
  );
};

export default TimerCount;

const styles = StyleSheet.create({
  countDownText: {
    fontSize: 110,
    fontWeight: '700',
  },
});
