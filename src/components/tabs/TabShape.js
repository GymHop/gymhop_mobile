import React, {useMemo} from 'react';
import {Dimensions} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import {line, curveBasis, curveLinear} from 'd3-shape';

const NAVIGATION_BOTTOM_TABS_HEIGHT = 88;

const {width: wWidth} = Dimensions.get('window');
const lineGenerator = line()
  .x(({x}) => x)
  .y(({y}) => y);

function TabsShape({}) {
  const d = useMemo(() => {
    const left = lineGenerator.curve(curveBasis)([
      {x: 0, y: 0},
      {x: wWidth / 2, y: NAVIGATION_BOTTOM_TABS_HEIGHT - 50},
      {x: wWidth, y: 0},
    ]);
    const right = lineGenerator.curve(curveLinear)([
      {x: wWidth, y: 0},
      {x: wWidth, y: NAVIGATION_BOTTOM_TABS_HEIGHT},
      {x: 0, y: NAVIGATION_BOTTOM_TABS_HEIGHT},
      {x: 0, y: 0},
    ]);

    const center = lineGenerator.curve(curveBasis)([
      {x: wWidth / 2 - 40, y: NAVIGATION_BOTTOM_TABS_HEIGHT - 25},
      {x: wWidth / 2 - 37, y: NAVIGATION_BOTTOM_TABS_HEIGHT - 25},
      {x: wWidth / 2 - 33, y: 0},
      {x: wWidth / 2 + 33, y: 0},
      {x: wWidth / 2 + 37, y: NAVIGATION_BOTTOM_TABS_HEIGHT - 25},
      {x: wWidth / 2 + 40, y: NAVIGATION_BOTTOM_TABS_HEIGHT - 25},
    ]);

    return `${left} ${center} ${right}`;
  }, []);

  return (
    <Svg width={wWidth} {...{height: NAVIGATION_BOTTOM_TABS_HEIGHT}}>
      <Path fill="#F5FFF9" {...{d}} />
    </Svg>
  );
}

export default TabsShape;
