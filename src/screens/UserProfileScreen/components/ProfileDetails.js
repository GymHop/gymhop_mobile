import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {useMutation, useQueryClient} from 'react-query';
import {putRequest} from '../../../context/queryHooks';
const editIcon = '../../../assets/icons/create.png';
const saveIcon = '../../../assets/icons/greenCheck.png';

const HeaderText = styled.Text`
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
  height: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 0px;
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

export const ProfileDetails = ({userData, token}) => {
  const queryClient = useQueryClient();
  const [canEdit, setCanEdit] = useState(false);
  const [updatedFirstName, setUpdatedFirstName] = useState('');
  const [updatedLastName, setUpdatedLastName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const userFormData = new FormData();

  const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  };

  const collectFormData = async () => {
    if (updatedFirstName && userData.firstName !== updatedFirstName) {
      userFormData.append('user[first_name]', updatedFirstName);
    }
    if (updatedLastName && userData.lastName !== updatedLastName) {
      userFormData.append('user[last_name]', updatedLastName);
    }
    if (updatedEmail && userData.email !== updatedEmail) {
      userFormData.append('user[email]', updatedEmail);
    }
    putRequest(userFormData, {headers});
  };

  const {mutate} = useMutation(collectFormData, {
    onSuccess: data => {
      console.log(data);
      queryClient.getQueryData('user')
      const message = 'success';
      alert(message);
    },
    onError: () => {
      alert('there was an error');
    },
    onSettled: () => {
      queryClient.invalidateQueries('user');
    },
  });

  const handleSave = () => {
    setCanEdit(!canEdit);
    if (canEdit) {
      mutate();
    }
  };

  return (
    <DetailsContainer>
      <HeaderContainer>
        <HeaderText style={styles.fontText}>Details</HeaderText>
        <EditButton onPress={() => handleSave()}>
          <EditText>{canEdit ? 'Save' : 'Edit'}</EditText>
          {canEdit ? (
            <IconImage source={require(saveIcon)} />
          ) : (
            <IconImage source={require(editIcon)} />
          )}
        </EditButton>
      </HeaderContainer>

      <View>
        <InputLabels>First Name</InputLabels>
        <Row>
          <InputField
            onChangeText={firstName => setUpdatedFirstName(firstName)}
            placeholder="First Name"
            editable={canEdit}
            defaultValue={userData.first_name}
            style={styles.fontText}
            autoFocus={canEdit}
          />
        </Row>

        <InputLabels>Last Name</InputLabels>
        <Row>
          <InputField
            onChangeText={lastName => setUpdatedLastName(lastName)}
            placeholder="Last Name"
            editable={canEdit}
            defaultValue={userData.last_name}
            style={styles.fontText}
          />
        </Row>

        <InputLabels>Email</InputLabels>
        <Row>
          <InputField
            onChangeText={email => setUpdatedEmail(email)}
            placeholder="Email"
            editable={canEdit}
            defaultValue={userData.email}
            style={styles.fontText}
          />
        </Row>

        <InputLabels>Mobile Phone</InputLabels>
        <Row>
          <InputField
            placeholder="Mobile Phone"
            editable={false}
            style={styles.fontText}
            defaultValue={userData.phone}
          />
        </Row>

        <InputLabels>Location</InputLabels>
        <Row style={styles.location}>
          <Text style={styles.locationText}>New York City</Text>
          <Image source={require('../../../assets/icons/near_me.png')} />
        </Row>
      </View>
    </DetailsContainer>
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
});
