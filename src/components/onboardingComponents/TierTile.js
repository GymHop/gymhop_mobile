import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styled from 'styled-components/native';

import { Res } from '../../resources';
import { H2 } from '../polygraphy';

const Container = styled.View`
  position: absolute;
  left: 21px;
  top: 145px;
  border-radius: ${Res.spaces.radius.default};
  padding-vertical: ${props => props.small ? Res.spaces.sm : Res.spaces.padding.xs};
  background-color: rgba(20, 20, 20, 0.75);
  align-items: center;
  justify-content: center;
  align-self: ${props => props.small ? 'center' : 'auto'};
  padding-horizontal: ${props => props.small ? Res.spaces.lg : 0};
  height: null;
  width: null;
  borderRadius: 8px;
  border: 2px solid rgba(4, 196, 157, 1)
`;

const StyledText = styled.Text`
  fontFamily: System;
  fontWeight: normal;
  fontStyle: normal;
  fontSize: 18px;
  lineHeight: 21.09px;
  textAlign: center;
  color: #FFFFFF
`;

const StyledTextContainer = styled.View`
  ${props => props.textContainerStyling}
`;

const StyledTierTitle = styled.Text`
  fontFamily: System;
  fontStyle: normal;
  fontWeight: bold;
  fontSize: 24px; 
  lineHeight: 30px;
  textAlign: center;
  color: #FFFFFF;
  ${props => props.tierTileStyling}
`;

const StyledImage = styled.Image`
  width: 38.48px;
  height: 44px;
  right: 85.84px;
  bottom: 15px;
`;

const StyledTierTitleContainer = styled.View`
    ${props => props.tierTitleContainerStyling}
`;

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'PlusJakartaSans-Regular'
  }
}); 


export const TierTile = props => {
  return(
  <Container style={({width: Number(props.containerWidth), height: Number(props.containerHeight)})}>
    <StyledTierTitleContainer {...props}>
      {props.PremiumBadge && (
        <StyledImage source={props.PremiumBadge} />
      )}
      <StyledTierTitle style={styles.fontText} {...props}>{props.tier}</StyledTierTitle>
    </StyledTierTitleContainer>
    <StyledTextContainer    
      style={{flex: 1, flexWrap: 'wrap'}} {...  props}>
      <StyledText style={styles.fontText}>{props.text}</StyledText>
    </StyledTextContainer>
  </Container>

    )}