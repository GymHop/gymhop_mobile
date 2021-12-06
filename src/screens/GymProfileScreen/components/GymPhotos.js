import React, {useState, useRef, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';

export const GymPhotos = ({gymData}) => {
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const imageTotal = gymData.photo_urls.length;
  const {width} = Dimensions.get('window');
  const imageWidth = width / imageTotal;
  const scrollViewRef = useRef(0);

  const setSliderPage = event => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const {currentPage: pageIndex} = sliderState;

  return (
    <>
      <ScrollView
        style={{flex: 1}}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          setSliderPage(event);
        }}
        ref={node => (this.scroll = node)}>
        {gymData.photo_urls.map(photo => (
          <View style={{width, height: 275}}>
            <Image
              source={{uri: photo}}
              style={{width, height: 275, resizeMode: 'cover'}}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.paginationWrapper}>
        {gymData.photo_urls.map((key, index) => (
          <View
            style={[
              styles.paginationDots,
              {backgroundColor: pageIndex === index ? 'white' : '#c4c4c4'},
            ]}
            key={index}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  paginationWrapper: {
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 210,
  },
  paginationDots: {
    height: 13,
    width: 13,
    borderRadius: 13 / 2,
    margin: 10,
  },
});
