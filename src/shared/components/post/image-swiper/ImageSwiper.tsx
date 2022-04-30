import * as React from 'react';
import {Image, ScrollView, Dimensions, View} from 'react-native';

import Video from 'react-native-video';
/**
 * ? Local Imports
 */
import styles, {_imageStyle, _dot} from './ImageSwiper.style';

export interface IImage {
  uri?: string;
  url?: string;
  URL?: string;
  URI?: string;
  asset?: any;
}

interface IProps {
  onSwipeTop?: any;
  onSwipeBottom?: any;
  images: IImage[];
}

interface IState {
  currentPage: number;
}

export default class ImageSwiper extends React.Component<IProps, IState> {
  scrollViewRef: any = null;
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  scrollToInitialPosition = () => {
    try {
      this.scrollViewRef.scrollTo({
        x: 0,
      });
    } catch (err) {
      console.error('Initial Position Scrolling Exception: ', err);
    }
  };

  uriHandler = (image: any) => ({
    uri: image.uri || image.URL || image.url || image.URI,
  });

  handleOnScroll(event: any) {
    // ? calculate screenIndex by contentOffset and screen width
    const newPage = parseInt(
      event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
    );
    if (this.state.currentPage !== newPage) {
      this.setState({currentPage: newPage});
    }
  }

  render() {
    const {images} = this.props;
    return (
      <>
        <ScrollView
          ref={ref => (this.scrollViewRef = ref)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal
          onScroll={e => this.handleOnScroll(e)}
          scrollEventThrottle={5}
          contentContainerStyle={styles.contentContainerStyle}
          onLayout={this.scrollToInitialPosition}
          {...this.props}>
          {images &&
            images.map((image: any, index: number) => {
              const imageSource = image.asset
                ? image.asset
                : this.uriHandler(image);
              return (
                <ScrollView horizontal key={index}>
                  {image.isVideo ? (
                    <Video
                      onError={(error: any) => console.log('error: ', error)}
                      source={imageSource}
                      resizeMode="cover"
                      style={styles.imageStyle}
                    />
                  ) : (
                    <Image
                      style={styles.imageStyle}
                      source={imageSource}
                      {...this.props}
                    />
                  )}
                </ScrollView>
              );
            })}
        </ScrollView>
        {images.length > 1 && (
          <View style={styles.dotsContainer}>
            {images.map((_, _index) => (
              <View key={_index} style={_dot(this.state.currentPage, _index)} />
            ))}
          </View>
        )}
      </>
    );
  }
}
