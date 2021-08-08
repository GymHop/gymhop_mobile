import {inject, observer} from 'mobx-react';
import React, {useState, useEffect} from 'react';
import {REQUEST_STATUS} from '../constants';
import {withAuth} from '../../../../context/useAuth';
import {OnboardSliderView} from '../components/OnboardSliderView';

const OnboardSliderContainer = props => {
  return <OnboardSliderView />;
};

export default OnboardSliderContainer;
