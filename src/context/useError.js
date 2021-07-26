import React from 'react';
import styled from 'styled-components/native';
import {Res} from '../resources';
import {Measurements} from '../utils';
import {H2} from '../components';

const Container = styled.View`
  flex: 1;
  background-color: ${Res.colors.main};
  align-items: center;
  justify-content: center;
`

const Image = styled.Image`
  width: ${Measurements.screenWidth / 2}px;
  height: ${Measurements.screenWidth / 2}px;
`

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Container>
          <Image resizeMode="contain" source={Res.images.icLogo} />
          <H2 white text={'Please contact to GoViral service'} />
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
