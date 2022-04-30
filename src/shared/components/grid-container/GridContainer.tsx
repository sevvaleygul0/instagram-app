import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-fast-image';
import {DISCOVERY_POST_TYPE_IMAGE} from '../../constants';
import Video from 'react-native-video';

/**
 * ? Local Imports
 */

import styles from './GridContiner.style';

interface IGridContainerProps {
  data: any;
}

const GridContainer: React.FC<IGridContainerProps> = ({data}) => {
  const {isVideo, asset} = data;

  const uriHandler = (image: any) => ({
    uri: image.uri || image.URL || image.url || image.URI,
  });
  const imageSource = asset ? asset : uriHandler(data);

  const renderSmallContainer = () =>
    isVideo ? (
      <Video
        onError={(error: any) => console.log('error: ', error)}
        source={imageSource}
        repeat={true}
        resizeMode="cover"
        style={styles.gridImageStyle}
      />
    ) : (
      <Image
        style={styles.gridImageStyle}
        source={imageSource}
        resizeMode="cover">
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
    <TouchableOpacity>
      {renderSmallContainer()}
      {/* {renderBigContainer()}
      {renderSmallContainer()} */}
    </TouchableOpacity>
  );
};

export default GridContainer;
