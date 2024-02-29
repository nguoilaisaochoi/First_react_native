import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Personal_Details = () => {
      const [password, setPassword] = useState('');
      const [retypePassword, setRetypePassword] = useState('');
      const [showPassword, setShowPassword] = useState(false);
      const [showrePassword, setShowrePassword] = useState(false);
      const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      };
      const toggleShowrePassword = () => {
        setShowrePassword(!showrePassword);
      };
  return (
    <View style={mystyle.body}>
        <View></View>
      <V
    </View>
  );
};

export default Personal_Details;
const mystyle = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#0C0F14',
  },
  task: {
    marginTop: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  arrowleft: {
    width: 40,
    height: 40,
  },
  textsetting: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 36,
    right: '30%',
  },
  avt: {
    width: 153,
    height: 153,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  input: {
    color: 'white',
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#252A32',
    padding: 10,
    height: 48,
  },

  iconContainer: {
    width: '100%',
    marginTop: '10%',
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#252A32',
  },
  inputpass: {
    width: '85%',
    padding: 10,
    color: 'white',
  },
  icon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: '3%',
  },
  button1: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#D17842',
    padding: 15,
    marginTop: '10%',
    marginBottom: '3%',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});