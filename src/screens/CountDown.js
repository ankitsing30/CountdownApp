import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {PauseIcon, PlayIcon} from '../assets';
import TimerCount from '../components/TimerCount';
import {styles} from './CountDownCss';

const CountDown = () => {
  const [min, setMin] = useState('');
  const [totalTime, setTotaltime] = useState(0);
  const [delay, setDelay] = useState(0);
  const [mode, setMode] = useState('');
  const [status, setStatus] = useState('');
  const [blink, setBlink] = useState(true);
  const timerRef = useRef(0);
  const blinkRef = useRef(0);

  useEffect(() => {
    if (totalTime !== 0 && mode !== 'pause') {
      onClear();
      Timer();
    }
  }, [delay]);

  useEffect(() => {
    if (totalTime === 10) {
      onBlink();
    }
  }, [totalTime]);

  const onClear = () => {
    clearInterval(timerRef.current);
    timerRef.current = 0;
  };

  const clearBlink = () => {
    setBlink(true);
    clearInterval(blinkRef.current);
  };

  const onBlink = () => {
    const refs = setInterval(() => {
      setBlink(s => !s);
    }, 400);
    blinkRef.current = refs;
  };

  const Timer = () => {
    const tRef = setInterval(() => {
      setTotaltime(s => {
        if ((min * 60) / 2 === s) {
          setStatus('More than halfway there!');
        }
        if (s <= 0) {
          clearBlink();
          setMode('');
          setMin('');
          onClear();
          setDelay(100);
          setStatus('Time’s up!');
          return 0;
        } else {
          return s - 1;
        }
      });
    }, delay);
    timerRef.current = tRef;
  };

  const onAction = type => {
    if (type === 'start') {
      Keyboard.dismiss();
      setStatus('');
      setMode('start');
      setTotaltime(Math.floor(min * 60));
      setDelay(1000);
    }
    if (type === 'pause') {
      setStatus('');
      setMode('pause');
      onClear();
    }
    if (type === 'resume') {
      setMode('start');
      Timer();
    }
  };

  const renderSpeedControls = () => {
    return (
      <View style={styles.rowView}>
        <TouchableOpacity
          style={[
            styles.speedButtonView,
            delay === 1000 && {backgroundColor: '#999'},
          ]}
          onPress={() => {
            setDelay(1000);
          }}>
          <Text style={styles.speedButtonText}>{'1X'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.speedButtonView,
            delay === 750 && {backgroundColor: '#999'},
          ]}
          onPress={() => {
            setDelay(750);
          }}>
          <Text style={styles.speedButtonText}>{'1.5X'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.speedButtonView,
            delay === 500 && {backgroundColor: '#999'},
          ]}
          onPress={() => {
            setDelay(500);
          }}>
          <Text style={styles.speedButtonText}>{'2X'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Enter Time duration View */}
      <View style={styles.inputView}>
        <Text style={styles.headerText}>{'Countdown:'}</Text>
        <TextInput
          style={styles.inputStyles}
          placeholder="(Min)"
          placeholderTextColor={'#CFCFCF'}
          keyboardType="numeric"
          value={min}
          onChangeText={value => {
            setMin(value);
          }}
        />
        <TouchableOpacity
          disabled={mode === '' && min === ''}
          style={[styles.buttonView, {backgroundColor: '#59b390'}]}
          onPress={() => {
            onAction('start');
          }}>
          <Text style={styles.buttonText}>{'Start'}</Text>
        </TouchableOpacity>
      </View>

      {/* Status of Count Down */}
      {status && <Text style={[styles.statusText]}>{status}</Text>}

      <View style={styles.inputView}>
        <TimerCount time={totalTime} blink={blink} />

        {/* Resume Icon */}
        {mode === 'pause' && (
          <TouchableOpacity
            onPress={() => {
              onAction('resume');
            }}>
            <Image source={PlayIcon} style={styles.iconBtn} />
          </TouchableOpacity>
        )}

        {/* Pause Icon */}
        {mode === 'start' && (
          <TouchableOpacity
            onPress={() => {
              onAction('pause');
            }}>
            <Image source={PauseIcon} style={styles.iconBtn} />
          </TouchableOpacity>
        )}
      </View>

      {/* Speed Controls */}
      {mode !== '' && renderSpeedControls()}
    </SafeAreaView>
  );
};

export default CountDown;
