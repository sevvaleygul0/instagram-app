import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Image from 'react-native-fast-image';

/**
 * ? Local Imports
 */
import styles from './LoginScreen.style';

interface ILoginScreenProps {}

const LoginScreen: React.FC<ILoginScreenProps> = ({}) => {
  const [usernameValue, setUsernameValue] = useState<any>();

  const renderIgLogo = () => (
    <Image
      style={styles.igLogoStyle}
      source={require('../../assets/icons/header/ig-logo.png')}
      resizeMode={Image.resizeMode.contain}
    />
  );

  const renderUsernameInput = () => (
    <TextInput
      style={styles.textInputStyle}
      placeholderTextColor="#fff"
      placeholder="Username"
      onChangeText={text => setUsernameValue(text)}
    />
  );

  const renderPasswordInput = () => (
    <View style={styles.passwordContainer}>
      <TextInput
        placeholderTextColor="#fff"
        style={styles.textInputStyle}
        placeholder="Password"
        onChangeText={text => setUsernameValue(text)}
      />
    </View>
  );

  return (
    <LinearGradient
      start={{x: 0, y: 0.4}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.3, 0.7]}
      colors={['#B71F81', '#C2296E', '#C83562']}
      style={styles.linearGradient}>
      {renderIgLogo()}
      {renderUsernameInput()}
      {renderPasswordInput()}
    </LinearGradient>
  );
};

export default LoginScreen;
