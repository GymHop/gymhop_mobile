import React, {} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styled from 'styled-components/native';
import { Res } from '../../resources';
import LocationPin from "../../assets/icons/transparentLocationPin.png"
import Star from "../../assets/icons/star_24px.png"
import PremiumBadge from '../../assets/icons/premiumBadge.png'
import Svg, { Circle } from 'react-native-svg';

const Container = styled.View`
    height: 176px;
    width: 343px;
    position: relative;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.25);
    margin-top: ${props => props.firstGym ? '60px' : '20px'}
    `

const StyledImage = styled.Image`
    height: 140px;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    `
const GymInfoContainer = styled.View`
    height: 84px;
    width: 343px;
    position: absolute;
    bottom:0;
    `
const GymInfoBottom = styled.View`
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    background-color: ${ props => props.premium ? Res.colors.gold : Res.colors.white };
    height: 43px;
    padding-left:16px;
    padding-right:16px;
    `
const GymInfoTop = styled.View`
    padding-left:16px;
    padding-right:16px;
    width: 343px;
    background: rgba(39, 39, 39, 0.49);
    height: 41px;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`

const StyledBadge = styled.Image`
    width: 26.23px;
    height: 30px;
    margin-right: 6px;
`;

const StyledLocationPin = styled.Image`
    width: 12.3px;
    height: 17.57px;
    margin-right:5px;
`;

const StyledAddress = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${Res.colors.textGrey};
  flex-wrap: wrap;
  width: 220px;
`;

const StyledDistance = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${Res.colors.textGrey};
`;

const StyledStar = styled.Image`
    width: 17px;
    height: 16px;
    margin-right: 5px;
    margin-left: 10px;
    margin-bottom: 4px;
`;

const StyledRating = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${Res.colors.white};
`;

const StyledName= styled.Text`
  padding-top: 7px;
  font-style: normal;
  font-weight: 700;
  font-size: ${props => props.nameLength > 15 ? '17px' : '21px'};
  line-height: 20px;
  color: ${Res.colors.white};
`;

const StyledOpenClosed = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 15px;
  color: ${Res.colors.white};
  text-transform: capitalize;
`;


export function GymListTile(props) {


    return (
    <Container firstGym={props.i === 0} >
        <StyledImage source={{uri:props.gym.main_photo_url}}/>
        <GymInfoContainer>
            <GymInfoTop>
                <View style={{flexDirection:'row', alignItems:'center'}} >
                {props.gym.tier==='premium' && <StyledBadge source={PremiumBadge} />}
                <StyledName style={styles.fontText} nameLength={props.gym.name.length} >{props.gym.name} </StyledName>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginTop:7}} >
                <Svg height='10' width='10' style={{marginBottom:2, marginRight:5}}>
                    <Circle cx="5" cy="5" r="5" fill={props.gym.openClosed === 'open' ? Res.colors.secondaryGreen : '#FF6060'} />
                </Svg>
                <StyledOpenClosed style={styles.fontText}>{props.gym.openClosed}</StyledOpenClosed>
                <StyledStar source={Star}></StyledStar>
                <StyledRating style={styles.fontText}>{props.gym.rating}</StyledRating>
                </View>
            </GymInfoTop>
            <GymInfoBottom premium={props.gym.tier === 'premium'}>
                <View style={{flexDirection:'row', alignItems:'center'}} >
                <StyledLocationPin source={LocationPin}/>
                <StyledAddress style={styles.fontText} >{props.gym.address1}</StyledAddress>
                </View>
                <StyledDistance style={styles.fontText}>{props.gym.distance}</StyledDistance>
            </GymInfoBottom>
        </GymInfoContainer>
    </Container>
    )
}

const styles = StyleSheet.create({
    fontText: {
      fontFamily: 'PlusJakartaSans-Regular',
      }
  });
