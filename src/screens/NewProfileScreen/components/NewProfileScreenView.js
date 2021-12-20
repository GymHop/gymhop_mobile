import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import {NewProfileHeader} from './NewProfileHeader';
import {NewNavProfile} from './NewNavProfile';
import {Tabs} from '../../../components/tabs/Tabs';

export const NewProfileScreenView = props => {
  return (
    <>
      <ScrollView>
        <NewProfileHeader />
        <NewNavProfile />
        {/* <Tabs /> */}
      </ScrollView>
    </>
  );
};
