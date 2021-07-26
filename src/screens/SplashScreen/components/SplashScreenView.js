// import glamorous from 'glamorous-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Res} from '../../../resources';
import {H1, PrimaryButton, H2} from '../../../components';
import { Measurements} from '../../../utils';

const Container = styled.View`
  flex: 1;
  background-color: ${Res.colors.main};
  padding-horizontal: ${Res.spaces.padding.md}px;
  padding-bottom: ${Measurements.safeAreaBottomInset + Res.spaces.md}px;
`

const Wrap = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${Measurements.screenHeight / 7}px;
`

const Logo = styled.Image`
  height: 200px;
  width: 200px;
`

const LngWrap = styled.View`
  background-color: ${Res.colors.white};
  border-radius: 20px;
  padding-vertical: 20px;
`

const LngBtn = styled.TouchableOpacity`
  padding-horizontal: 20px;
  flex-direction: row;
  align-items: center;
`

const Flag = styled.Image`
  width: 28px;
  height: 20px;
  margin-right: 10px;
`

export const SplashScreenView = props => {
  const [toggleDropdown, setToggleDrop] = useState(false);
  const {t} = useTranslation();
  return (
    <Container>
      <Wrap>
        <Logo source={Res.images.icLogo} resizeMode="contain" />
        <H1
          white
          style={{
            textAlign: 'center',
            marginBottom: Res.spaces.padding.md,
          }}
          text={t('entry')}
        />

        <PrimaryButton
          style={{
            paddingHorizontal: 40,
            paddingVertical: Res.spaces.padding.xxs,
            marginBottom: 10,
          }}
          onPress={() => setToggleDrop(!toggleDropdown)}
          textStyle={{
            fontWeight: '400',
          }}
          text={t('placeholders.selectLanguage')}
        />
        {toggleDropdown && (
          <LngWrap>
            <LngBtn
              onPress={() => {
                setToggleDrop(!toggleDropdown);

                props.onLanguageChange('ru');
              }}
              style={{
                marginBottom: 10,
              }}>
              <Flag source={Res.images.icRu} />
              <H2 text={'Русский'} />
            </LngBtn>
            <LngBtn
              onPress={() => {
                setToggleDrop(!toggleDropdown);

                props.onLanguageChange('en');
              }}>
              <Flag source={Res.images.icEng} />
              <H2 text={'English'} />
            </LngBtn>
          </LngWrap>
        )}
      </Wrap>
      <PrimaryButton
        textStyle={{
          color: Res.colors.secondary,
          fontWeight: '700',
        }}
        text={t('placeholders.start')}
        onPress={props.onNavigation}
      />
    </Container>
  );
};
