import React, {useEffect, useContext, useState} from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {NewProfileDetails} from './Account/NewProfileDetails';
import {NewActivityLayout} from './Activity/NewActivityLayout';
import {NewProfilePicture} from './Account/NewProfilePicture';
import {NewProfileMembership} from './Membership/NewProfileMembership';

const icon1 = {
  account: require('../../../assets/icons/account.png'),
  accountActive: require('../../../assets/icons/accountGreen.png'),
};
const icon2 = {
  activity: require('../../../assets/icons/activity.png'),
  activityActive: require('../../../assets/icons/activityGreen.png'),
};
const icon3 = {
  membership: require('../../../assets/icons/membership.png'),
  membershipActive: require('../../../assets/icons/membershipGreen.png'),
};

export const NewNavProfile = props => {
  const [activeTab, setActiveTab] = useState(1);

  const tab2 = () => {
    setActiveTab(2);
  };
  const tab1 = () => {
    setActiveTab(1);
  };
  const tab3 = () => {
    setActiveTab(3);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={() => tab1()}>
          {activeTab === 1 ? (
            <Image source={icon1.accountActive} style={styles.navLogo} />
          ) : (
            <Image source={icon1.account} style={styles.navLogo} />
          )}
          {activeTab === 1 ? (
            <Text style={styles.textActive}>Account</Text>
          ) : (
            <Text style={styles.text}>Account</Text>
          )}
          {activeTab === 1 ? <View style={styles.after} /> : null}
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => tab2()}>
          {activeTab === 2 ? (
            <Image source={icon2.activityActive} style={styles.navLogo} />
          ) : (
            <Image source={icon2.activity} style={styles.navLogo} />
          )}
          {activeTab === 2 ? (
            <Text style={styles.textActive}>Activity</Text>
          ) : (
            <Text style={styles.text}>Activity</Text>
          )}
          {activeTab === 2 ? <View style={styles.after} /> : null}
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => tab3()}>
          {activeTab === 3 ? (
            <Image source={icon3.membershipActive} style={styles.navLogo} />
          ) : (
            <Image source={icon3.membership} style={styles.navLogo} />
          )}
          {activeTab === 3 ? (
            <Text style={styles.textActive}>Membership</Text>
          ) : (
            <Text style={styles.text}>Membership</Text>
          )}
          {activeTab === 3 ? <View style={styles.after} /> : null}
        </TouchableOpacity>
      </View>
      {activeTab === 1 && <NewProfileDetails />}
      {activeTab === 1 && <NewProfilePicture />}
      {activeTab == 2 && <NewActivityLayout />}
      {activeTab == 3 && <NewProfileMembership />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#CDCDCD',
    borderTopColor: '#CDCDCD',
    flexDirection: 'row',
    paddingLeft: 45,
  },
  item: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 68,
  },
  text: {
    color: '#454545',
    fontFamily: 'PlusJakartaSans',
  },
  textActive: {
    color: '#00C288',
    fontFamily: 'PlusJakartaSans',
  },
  after: {
    width: 45,
    height: 4,
    borderRadius: 5,
    backgroundColor: '#00C288',
  },
});
