import React, { useState } from 'react';
import {NewProfileMembership} from './NewProfileMembership';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import {StandartSubcribe} from './Carousel/StandartSubscribe';
import { SelectPayment } from './SelectPayment';

export const NewMembershipLayout = props => {

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [tier, setTier] = useState('');


  return (
    <>
      {!showPaymentModal && <NewProfileMembership setPaymentModalBool={setShowPaymentModal} setTier={setTier} />}
      {showPaymentModal && <SelectPayment tier={tier} /> }
    </>
  );
};
