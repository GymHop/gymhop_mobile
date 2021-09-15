import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styled from 'styled-components/native';
import { Res } from '../../resources';
import { H2 } from '../polygraphy';
import LocationPin from "../../assets/icons/locationpin.png"
import Star from "../../assets/icons/star_24px.png"
import {Svg, Line } from 'react-native-svg';
import PremiumBadge from '../../assets/icons/premiumBadge.png'

const Container = styled.View`
  borderBottomLeftRadius: 14px;

  borderBottomRightRadius: 14px;
  padding-vertical: ${props => props.small ? Res.spaces.sm : Res.spaces.padding.xs};
  background-color: ${Res.colors.bgGrey}
  align-items: center;
  justify-content: center;
  align-self: ${props => props.small ? 'center' : 'auto'};
  padding-horizontal: ${props => props.small ? Res.spaces.lg : 0};
  height: 170px;
  width: 275px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

const ImageContainer = styled.View`
`;

const StyledImage = styled.Image`
 ${props => props.tier === 'premium' ? 
 'bottom: 66px; height: 110px; width: 275px;' 
 : 'bottom: 25; height: 135px; width: 275px;'}
  borderTopLeftRadius: 14px;
  borderTopRightRadius: 14px;
`;

const StyledName= styled.Text`
  bottom: 4px;
  padding-top: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${Res.colors.textDark};
  letter-spacing: 0.24;
`;


const AddressWrap = styled.View`
  top: ${props => props.address1.length < 30 ? '6px' : '0px'}
  left: 18px;
  width: 225px;
  display: flex;
  padding-bottom: 2px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

`;

const StyledAddress = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  right: 10px;
  color: ${Res.colors.textGrey};
`;

const StyledLineContainer = styled.View`
width: 260px;
height: 1px;
bottom: 40px;
left: 15px;
`;

const StyledBottomLineContainer = styled.View`
  display: flex;
  flex-direction: row;
  top: 15px;
  borderRadius: 1px;
`;

const StyledOpenClosed = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${Res.colors.textGrey};
  right: 45px;
`;

const StyledDistance = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${Res.colors.textGrey};
  right: 3px;
`;

const StyledStar = styled.Image`
  left: 33px
`;

const StyledRating = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${Res.colors.textDark};
  left: 40px
`;

const StyledBottomContainer = styled.View`
  position: absolute;
  bottom: 18;
  padding-vertical: ${props => props.small ? Res.spaces.sm : Res.spaces.padding.xs};
  background-color: ${Res.colors.bgGrey};
  align-items: center;
  justify-content: center;
  align-self: ${props => props.small ? 'center' : 'auto'};
  padding-horizontal: ${props => props.small ? Res.spaces.lg : 0};
  height: 65px;
  width: 275px;
`;

const StyledLocationPin = styled.Image`
  height: 14.29px;
  width: 10px
  right: 18px
`;

const StyledBadge = styled.Image`
  width: 22.74px;
  height: 26px;
`;

const StyledBadgeContainer = styled.View`
  width: 36px;
  height: 36px;
  borderRadius: 6px;
  bottom: 22px;
  right: 105px;
  z-index: 2;
  justify-content: center;
  align-items: center;
  background-color: rgba(4, 4, 4, 0.6);
`;

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'PlusJakartaSans-Regular',
    }
}); 

export const GymTile = props => {
  return(
  <Container>
    {props.tier === "premium" && (
      <StyledBadgeContainer>
        <StyledBadge source={PremiumBadge} />
      </StyledBadgeContainer>
      )}
    <ImageContainer>
        <StyledImage source={{uri: props.main_photo_url}} {...props}/>
    </ImageContainer>
    <StyledBottomContainer>
      <StyledName style={styles.fontFamily}>{props.name}</StyledName>
      <AddressWrap {...props}>
        <StyledLocationPin source={LocationPin}/>
        <View style={{flexDirection:'row', flex: 1, flexWrap: 'wrap'}}>
        <StyledAddress style={styles.fontFamily} {...props}>{props.address1}</StyledAddress>
        </View>
      </AddressWrap>
      <StyledLineContainer>
          <Svg height="100" width="228" style={{top:53}}>
              <Line strokeDasharray='8, 10' x1="0" y1="0" x2="228" y2="0" stroke={Res.colors.textGrey} strokeWidth="2" />
          </Svg>
      </StyledLineContainer> 
      <StyledBottomLineContainer>
        <StyledOpenClosed style={styles.fontFamily}>{props.openClosed}</StyledOpenClosed>
        <StyledDistance style={styles.fontFamily}>{props.distance}</StyledDistance>
        <StyledStar source={Star}></StyledStar>
        <StyledRating style={styles.fontFamily}>{props.rating}</StyledRating>
      </StyledBottomLineContainer>
    </StyledBottomContainer>
  </Container>

    )}