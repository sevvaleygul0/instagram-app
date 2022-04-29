import * as React from 'react';
import {Image, ScrollView, Dimensions} from 'react-native';
/**
 * ? Local Imports
 */
import {_imageStyle} from './ImageSwiper.style';
const ScreenWidth = Dimensions.get('window').width;

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
  imageWidth?: number;
  imageHeight?: number;
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

  handleSwipeGestures = (e, item, index) => {
    const {onSwipeBottom, onSwipeTop} = this.props;
    if (e.nativeEvent.contentOffset.y < 0) {
      onSwipeBottom && onSwipeBottom(item);
    } else {
      onSwipeTop && onSwipeTop(item);
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
    const {images, imageWidth, imageHeight} = this.props;
    return (
      <ScrollView
        ref={ref => (this.scrollViewRef = ref)}
        horizontal
        pagingEnabled
        alwaysBounceHorizontal
        onScroll={e => this.handleOnScroll(e)}
        scrollEventThrottle={5}
        contentContainerStyle={{
          marginTop: 0.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onLayout={this.scrollToInitialPosition}
        {...this.props}>
        {images &&
          images.map((image: IImage, index: number) => {
            const imageSource = image.asset
              ? image.asset
              : this.uriHandler(image);
            return (
              <ScrollView
                key={index}
                onScrollEndDrag={e =>
                  this.handleSwipeGestures(e, image, index)
                }>
                <Image
                  style={_imageStyle(imageHeight, imageWidth)}
                  source={imageSource}
                  {...this.props}
                />
              </ScrollView>
            );
          })}
      </ScrollView>
    );
  }
}
