import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
    },
    buttonView: {
      width: 100,
      backgroundColor: '#222',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: '700',
      color: '#FFF'
    },
    speedButtonView: {
      width: 80,
      backgroundColor: '#FFF',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 1,
    },
    speedButtonText: {
      fontSize: 18,
      fontWeight: '700',
      color: '#222'
    },
    inputStyles: {
      borderWidth: 1,
      borderColor: '#222',
      width: 100,
      alignSelf: 'center',
      paddingHorizontal: 20,
      color: '#222',
      fontSize: 18,
    },
    headerText: {
      fontSize: 14,
      fontWeight: '700',
      color: '#222'
    },
    statusText: {
      fontSize: 24,
      fontWeight: '700',
      marginTop: 40,
      color: '#222',
    },
    rowView: {
      flexDirection: 'row',
      gap: 10,
      marginTop: 20
    },
    inputView: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      marginTop: 20,
    },
    iconBtn: {
      height: 50,
      width: 50,
      resizeMode: 'contain'
    },
  });