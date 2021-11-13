import React, {useEffect, useState} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {HeaderText} from '../../UserProfileScreen/components/ProfileDetails';

const HoursContainer = styled.View`
  background-color: #ffffff;
  margin-bottom: 10px;
`;

const HoursText = styled.Text`
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #626262;
  text-transform: lowercase;
`;
const DayText = styled.Text`
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #626262;
  text-transform: capitalize;
`;

const HoursBox = styled.View`
  background-color: #caf4dc;
  margin-left: 17px;
  margin-right: 17px;
  margin-bottom: 17px;
  padding: 12px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`;

const HoursRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OpenNowContainer = styled.TouchableOpacity`
  background: #caf4dc;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-left: 17px;
  margin-right: 17px;
  margin-bottom: 17px;
  padding: 5px;
`;

const OpenToday = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
`;

const OpenNowText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #000000;
`;

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

export const HoursBlock = ({gymData}) => {
  const [currentDay, setCurrentDay] = useState(null);
  const [currentHours, setCurrentHours] = useState(0);
  const [collapsed, setCollapsed] = useState(true);

  let hours = gymData.gym_schedules;
  let dateVariable = new Date(Date.now());

  const checkDay = () => {
    let day = dateVariable.getDay();
    setCurrentDay(day);
    if (currentDay >= 1) {
      setCurrentHours(hours[currentDay - 1]);
      console.log(currentHours)
    } else if (currentDay === 0) {
      setCurrentHours(hours[6]);
      console.log(currentHours)
    }
  };

  useEffect(() => {
    checkDay();
  }, []);

  return (
    <HoursContainer>
      <HeaderText>Hours</HeaderText>
      <OpenNowContainer onPress={()=>setCollapsed(!collapsed)}>
        <HoursRow>
          <OpenToday>
            <Image
              style={{marginLeft: 10, marginRight: 10}}
              source={require('../../../assets/icons/clock.png')}
            />
            <OpenNowText style={styles.fontText}>Open Today</OpenNowText>
          </OpenToday>
          <OpenToday>
            <OpenNowText>
              {currentHours.start_hour}:{currentHours.start_minute}{' '}
              {currentHours.start_am_pm} - {currentHours.end_hour}:
              {currentHours.end_minute} {currentHours.end_am_pm}
            </OpenNowText>
            <Image
              style={{marginLeft: 10, marginRight: 10}}
              source={require('../../../assets/icons/expand.png')}
            />
          </OpenToday>
        </HoursRow>
      </OpenNowContainer>

      {!collapsed && (
        <HoursBox>
          {hours.map(dailyHours => (
            <HoursRow>
              <DayText style={styles.fontText}>{dailyHours.day}</DayText>
              <HoursText style={styles.fontText}>
                {dailyHours.start_hour}:{dailyHours.start_minute}{' '}
                {dailyHours.start_am_pm} - {dailyHours.end_hour}:
                {dailyHours.end_minute} {dailyHours.end_am_pm}
              </HoursText>
            </HoursRow>
          ))}
        </HoursBox>
      )}
    </HoursContainer>
  );
};
