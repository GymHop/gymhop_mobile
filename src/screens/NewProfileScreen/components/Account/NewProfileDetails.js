import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {useMutation, useQueryClient} from 'react-query';
import {putRequest} from '../../../../context/queryHooks';

export const HeaderText = styled.Text`
  font-weight: 700;
  height: 26px;
  font-size: 21px;
  margin: 16px;
  margin-bottom: 20px;
`;
const InputLabels = styled.Text`
  font-size: 16px;
  left: 34px;
`;
const InputField = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #dedede;
  width: 85%;
  align-self: center;
  color: #898989;

  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;

  font-size: 14px;
  left: 34px;
`;
const EditText = styled.Text`
  color: #00c288;
  font-size: 16px;
  padding-right: 13px;
  text-decoration: underline;
  text-decoration-color: #00c288;
`;
const Row = styled.View`
  flex-direction: row;
`;
const DetailsContainer = styled.View`
  background-color: #ffffff;
`;
const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const IconImage = styled.Image`
  margin-right: 19px;
`;
const EditButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const NewProfileDetails = ({userData, token}) => {
  const [canEdit, setCanEdit] = useState(false);

  return (
    <>
      <DetailsContainer>
        <HeaderContainer>
          <HeaderText style={styles.fontText}>Profile Details</HeaderText>
        </HeaderContainer>

        <View>
          <InputLabels>Name</InputLabels>
          <Row>
            <InputField
              // onChangeText={firstName => setUpdatedFirstName(firstName)}
              placeholder="Name"
              editable={canEdit}
              style={styles.fontText}
              autoFocus={canEdit}
            />
            <Image
              source={require('../../../../assets/icons/create.png')}
              style={styles.edit}
            />
          </Row>
          <InputLabels>Email</InputLabels>
          <Row>
            <InputField
              // onChangeText={email => setUpdatedEmail(email)}
              placeholder="Email"
              editable={canEdit}
              style={styles.fontText}
            />
            <Image
              source={require('../../../../assets/icons/create.png')}
              style={styles.edit}
            />
          </Row>

          <InputLabels>Mobile Phone</InputLabels>
          <Row>
            <InputField
              placeholder="Mobile Phone"
              editable={false}
              style={styles.fontText}
            />
            <Image
              source={require('../../../../assets/icons/create.png')}
              style={styles.edit}
            />
          </Row>

          <InputLabels>Location</InputLabels>
          <Row style={styles.location}>
            <Text style={styles.locationText}>New York City</Text>
            <Image source={require('../../../../assets/icons/near_me.png')} />
          </Row>
        </View>
      </DetailsContainer>
    </>
  );
};

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 34,
  },
  locationText: {
    color: '#898989',
    left: 34,
  },
  edit: {marginTop: 25},
});
