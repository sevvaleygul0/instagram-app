import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import Image from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import * as NavigationService from 'react-navigation-helpers';
/**
 * ? Local Imports
 */
import {SCREENS} from '../../shared/constants';
import styles, {_forgotText} from './LoginScreen.style';

interface ILoginScreenProps {}

const LoginScreen: React.FC<ILoginScreenProps> = ({}) => {
  const [usernameValue, setUsernameValue] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = () => NavigationService.navigate(SCREENS.HOME);

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

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
      value={usernameValue}
      onChangeText={text => setUsernameValue(text)}
    />
  );

  const renderPasswordInput = () => (
    <View style={styles.passwordContainer}>
      <TextInput
        placeholderTextColor="#fff"
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
      <Text style={_forgotText()}>Forgot your login details? </Text>
      <Text style={_forgotText('bold')}>Get help signing in.</Text>
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
      <Text style={_forgotText()}> Don't have an account? </Text>
      <Text style={_forgotText('bold')}>Sign up.</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      start={{x: 0, y: 0.4}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.5, 0.7]}
      colors={['#BF1573', '#C2296E', '#C83562']}
      style={styles.linearGradient}>
      {renderIgLogo()}
      {renderUsernameInput()}
      {renderPasswordInput()}
      {renderLoginButton()}
      {renderForgotButton()}
      {renderDivider()}
      {renderFacebookLogin()}
      {renderSignupButton()}
    </LinearGradient>
  );
};

export default LoginScreen;
