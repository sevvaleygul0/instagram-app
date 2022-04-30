import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-fast-image';
import {DISCOVERY_POST_TYPE_IMAGE} from '../../constants';

/**
 * ? Local Imports
 */

import styles from './GridContiner.style';

interface IGridContainerProps {
  data: any;
}

const GridContainer: React.FC<IGridContainerProps> = ({data}) => {
  console.log(DISCOVERY_POST_TYPE_IMAGE[data.type]);

  const renderSmallContainer = () => (
    <Image style={styles.gridImageStyle} source={data.asset} resizeMode="cover">
      <Image
        style={styles.gridPostTypeImage}
        source={DISCOVERY_POST_TYPE_IMAGE[data.type]}
        resizeMode="cover"
      />
    </Image>
  );

  const renderBigContainer = () => (
    <View style={{width: 50, height: 50}}>
      <Text style={{fontSize: 5}}>2</Text>
    </View>
  );

  return (
    <View>
      {renderSmallContainer()}
      {/* {renderBigContainer()}
      {renderSmallContainer()} */}
    </View>
  );
};

export default GridContainer;
