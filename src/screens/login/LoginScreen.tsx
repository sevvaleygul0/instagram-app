import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import Image from 'react-native-fast-image';
/**
 * ? Local Imports
 */
import {SCREENS} from '../../shared/constants';
import styles, {_singupText} from './LoginScreen.style';

interface ILoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<ILoginScreenProps> = ({navigation}) => {
  const [usernameValue, setUsernameValue] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => navigation.navigate(SCREENS.HOME);

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const renderIgLogo = () => (
    <Image
      style={styles.igLogoStyle}
      tintColor="#111"
      source={require('../../assets/icons/header/ig-logo.png')}
      resizeMode={Image.resizeMode.contain}
    />
  );

  const renderUsernameInput = () => (
    <TextInput
      style={styles.textInputStyle}
      placeholderTextColor="#878787"
      placeholder="Phone number, username or email"
      value={usernameValue}
      onChangeText={text => setUsernameValue(text)}
    />
  );

  const renderPasswordInput = () => (
    <View style={styles.passwordContainer}>
      <TextInput
        placeholderTextColor="#878787"
        style={styles.textInputStyle}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
    </View>
  );

  const renderLoginButton = () => (
    <TouchableOpacity style={styles.loginButtonStyle} onPress={handleLogin}>
      <Text style={styles.loginButtonText}>Log In</Text>
    </TouchableOpacity>
  );

  const renderForgotButton = () => (
    <TouchableOpacity style={styles.forgotButtonStyle}>
      <Text style={styles.forgotText}>Forgot password?</Text>
    </TouchableOpacity>
  );

  const renderDivider = () => (
    <View style={styles.dividerContainer}>
      <View style={styles.dividerStyle} />
      <Text style={styles.dividerText}>OR</Text>
      <View style={styles.dividerStyle} />
    </View>
  );

  const renderFacebookLogin = () => (
    <TouchableOpacity style={styles.facebookButtonStyle}>
      <Image
        style={styles.facebookIcon}
        source={require('../../assets/icons/login/facebook.png')}
        resizeMode={Image.resizeMode.contain}
      />
      <Text style={styles.facebookText}> Log in with Facebook</Text>
    </TouchableOpacity>
  );

  const renderSignupButton = () => (
    <TouchableOpacity style={styles.signupButton}>
      <Text style={_singupText()}> Don't have an account? </Text>
      <Text style={_singupText(true)}>Sign up.</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderIgLogo()}
      {renderUsernameInput()}
      {renderPasswordInput()}
      {renderLoginButton()}
      {renderForgotButton()}
      {renderDivider()}
      {renderFacebookLogin()}
      {renderSignupButton()}
    </View>
  );
};

export default LoginScreen;
