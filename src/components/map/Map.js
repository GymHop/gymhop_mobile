import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Button, View, Text, ImageBackground, Image, Platform, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { MarkerComponent } from './MarkerComponent';
import axios from 'axios'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: null,
    width: null,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
const StyledLocationPin = styled.Image`
height: 54px; 
width: 54px
`



export const Map = props => {

  const [markers, setMarkers] = useState([])
  useEffect(() => {
    axios.get('https://gymhop-api-staging.herokuapp.com/api/v1/gyms?latitude=40.7021&longitude=-73.9863196')
      .then(data => setMarkers(data.data.data))
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        // provider={PROVIDER_GOOGLE}// remove if not using Google Maps
        style={styles.map}
        initialRegion={{
          latitude: 40.709318,
          longitude: -73.990686,
          latitudeDelta: props.latitudeDelta,
          longitudeDelta: props.longitudeDelta,
        }}
        onRegionChange={this.onRegionChange}

      >
        {markers && (markers.map((marker, index) => (
          <MarkerComponent
            key={marker.id}
            address1={marker.address1}
            amenities={marker.amenities}
            main_photo_url={marker.main_photo_url}
            name={marker.name}
            photo_urls={marker.photo_urls}
            state_code={marker.state_code}
            tier={marker.tier}
            website_url={marker.website_url}
            zip_code={marker.zip_code}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            burough={marker.burough}
            city={marker.city}
            logo_url={marker.logo_url}
          />
        )))}
      </MapView>
    </View>
  )
}