import React, {useState, useRef, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ImageSlider from 'react-native-image-slider';

const {width} = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;

export const GymPhotos = ({gymData}) => {
  useEffect(() => {
    console.log(gymData.photo_urls);
  }, []);

  return <></>}
  // return (
    // <ImageSlider
    //  />



    // <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center'}}>
    //   <Text
    //     style={{
    //       color: 'white',
    //       fontSize: 32,
    //       marginTop: 50,
    //       marginBottom: 25,
    //     }}>
    //     Custom Gallery
    //   </Text>

    //   <View style={{flex: 1 / 2, marginTop: 20}}>
    //     <Carousel
    //       layout="default"
    //       data={gymData.photo_urls}
    //       sliderWidth={width}
    //       itemWidth={width}
    //       firstItem={0}
    //       initialScrollIndex={0}
     
    //       renderItem={({item, index}) => (
    //         <Image
    //           key={index}
    //           style={{width: '100%', height: '100%'}}
    //           resizeMode="contain"
    //           source={{uri: item}}
    //         />
    //       )}
    //     />
    //   </View>
    // </View>
  // );
// };
