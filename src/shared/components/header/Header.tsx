import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
/**
 * ? Local Imports
 */

interface IHeader {}

const Header: React.FC<IHeader> = ({}) => {
  const [state, setState] = useState<any>();

  return <Icon name="github" type="AntDesign" size={30} color="purple" />;
};

export default Header;
