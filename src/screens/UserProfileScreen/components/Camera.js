import React from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';

export const Camera = () => {
  const [
    {cameraRef, type, ratio, autoFocus, autoFocusPoint},
    {facesDetected, takePicture},
  ] = useCamera();

  const captureHandle = async () => {
    try {
      const data = await takePicture();
      console.log(data.uri);
      const imageUri = data.uri;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <RNCamera
        ref={cameraRef}
        // autoFocusPointOfInterest={autoFocusPoint.normalized}
        type={RNCamera.Constants.Type.front}
        // ratio={ratio}
        style={{flex: 1, alignItems: 'center'}}
        autoFocus={autoFocus}
        onFacesDetected={facesDetected}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <TouchableOpacity onPress={() => captureHandle()} style={{flex: 1}}>
        <Text style={{fontSize: 14}}> SNAP </Text>
      </TouchableOpacity>
    </View>
  );
};
