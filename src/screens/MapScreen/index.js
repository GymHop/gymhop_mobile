import React from 'react';

import {screen} from '../../hocs/screen';

import {MapScreenContainer} from './containers/MapScreenContainer';

export const MapScreen = screen(props => <MapScreenContainer />);
