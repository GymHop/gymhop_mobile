import React from 'react';
import CodeInput from 'react-native-code-input';
import styled from 'styled-components/native';
import {Res} from '../../resources';
import {H2, PrimaryButton} from '../../components';
import {Measurements} from '../../utils';

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

/**
 * 
  /*margin-bottom: ${Res.spaces.sm}px;
  bottom: ${Measurements.safeAreaBottomInset + 20}px;
  left: ${(Measurements.screenWidth - 246 - Res.spaces.md) / 2};
  */

const Wrap = styled.View`
  width: 246px;
`;

const Row = styled.View`
  flex-direction: row;
  margin-vertical: ${Res.spaces.sm}px;
`;

const Field = styled.TextInput`
  height: 54px;
  width: 54px;
  background-color: ${Res.colors.white}px;
  border-radius: ${Res.spaces.radius.xs}px;
  text-align: center;
`;

const Liner = styled.View`
  width: 10px;
`;

export const CodeEnter = props => {
  return (
    <CodeInput
      codeLength={6}
      inputPosition="left"
      secureTextEntry={false}
      onFulfill={code => {
        props.onCode(code);
      }}
      selectionColor="red"
      codeInputStyle={{
        backgroundColor: Res.colors.white,
        borderRadius: Res.spaces.radius.xs,
        textAlign: 'center',
        color: '#000',
      }}
      underlineColorAndroid={'transparent'}
    />
  );
};
