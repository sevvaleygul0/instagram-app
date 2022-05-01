import React, {useState} from 'react';
import {Image, ScrollView, Dimensions, View} from 'react-native';
import Video from 'react-native-video';
/**
 * ? Local Imports
 */
import {DISCOVERY_POST_VIDEOS} from '../../constants';
/**
 * ? Local Imports
 */
import styles, {_dot} from './ImageSwiper.style';

interface IImageSwiperProps {
  images: IImage[];
}

export interface IImage {
  uri?: string;
  url?: string;
  URL?: string;
  URI?: string;
  asset?: any;
}

const ImageSwiper: React.FC<IImageSwiperProps> = ({images}) => {
  let scrollViewRef: any = null;
  const [currentPage, setCurrentPage] = useState<number>(0);

  const scrollToInitialPosition = () => {
    try {
      scrollViewRef?.scrollTo({
        x: 0,
      });
    } catch (err) {
      console.error('Initial Position Scrolling Exception: ', err);
    }
  };

  const handleOnScroll = (event: any) => {
    // ? calculate screenIndex by contentOffset and screen width
    const newPage = parseInt(
      String(
        Math.round(event.nativeEvent.contentOffset.x) /
          Math.round(Dimensions.get('window').width),
      ),
    );
    if (currentPage !== newPage) {
      setCurrentPage(newPage);
    }
  };

  const renderPagination = () =>
    images.length > 1 && (
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View key={index} style={_dot(currentPage, index)} />
        ))}
      </View>
    );

  return (
    <>
      <ScrollView
        ref={ref => (scrollViewRef = ref)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal
        onScroll={e => handleOnScroll(e)}
        scrollEventThrottle={5}
        contentContainerStyle={styles.contentContainerStyle}
        onLayout={scrollToInitialPosition}>
        {images &&
          images.map((image: any, index: number) => {
            const imageSource =
              image.asset && DISCOVERY_POST_VIDEOS[image.asset]
                ? DISCOVERY_POST_VIDEOS[image.asset]
                : {uri: image.asset};

            return (
              <ScrollView horizontal key={index}>
                {image.isVideo ? (
                  <Video
                    onError={(error: any) => console.log('error: ', error)}
                    source={imageSource}
                    resizeMode="cover"
                    muted
                    repeat
                    disableFocus
                    style={styles.imageStyle}
                  />
                ) : (
                  <Image style={styles.imageStyle} source={imageSource} />
                )}
              </ScrollView>
            );
          })}
      </ScrollView>
      {renderPagination()}
    </>
  );
};

export default ImageSwiper;
