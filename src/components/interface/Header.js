// import React from 'react';
// import {
//   Header as NavigationHeader,
//   HeaderTitle as NavigationHeaderTitle,
//   StackHeaderProps as NavigationHeaderProps,
// } from '@react-navigation/stack';
// import styled from 'styled-components/native';

// import { Measurements} from '../../utils';
// import {Res} from '../../resources';
// import {useNavigation} from '@react-navigation/native';

// const Container = styled.View`
//   ${ Platform.OS === 'ios'
//     ? 
//       `height: ${Measurements.statusBarHeight + Measurements.navigationBarHeight};
//       background-color: ${Res.colors.white};`
//     :  `height: ${Measurements.navigationBarHeight};`
//   }
// `

// const FormatedTitle = ({title, titleStyle}) => {
//   return (
//     <NavigationHeaderTitle style={titleStyle}>{title}</NavigationHeaderTitle>
//   );
// };

// const Button = styled.TouchableOpacity`
//   padding-top:
//     ${Platform.OS === 'ios'
//       ? Measurements.statusBarHeight + Measurements.navigationBarHeight / 2 - 10
//       : Measurements.navigationBarHeight / 2 - 10}px;
//   position: absolute;
//   justify-content: center;
//   flex: 1;
//   align-items: center;
// `

// const Icon = styled.Image`
//   width: 12px;
//   height: 20px;
// `

// const RegularTitleWrapper = styled.View`
//   flex: 1;
//   padding-top: ${Measurements.statusBarHeight};
//   justify-content: center;
//   align-items: center;
// `

// export const Header = props => {
//   const navigation = useNavigation();
//   const {
//     navigationOptions: {
//       title,
//       titleStyle,
//       headerStyle,
//       onBack,
//       onClose,
//       onDrawer,
//     },
//   } = props;
//   const regularTitleTextElement = (
//     <FormatedTitle title={title} titleStyle={titleStyle} />
//   );
//   return (
//     <Container>
//       {onBack && (
//         <Button
//           style={{
//             left: Res.spaces.md,
//           }}
//           hitSlop={{
//             top: 20,
//             left: 20,
//             bottom: 20,
//             right: 20,
//           }}
//           onPress={() => props.navigation.goBack()}>
//           <Icon resizeMode="contain" source={Res.images.icBack} />
//         </Button>
//       )}
//       {onDrawer && (
//         <Button
//           style={{
//             left: Res.spaces.md,
//           }}
//           hitSlop={{
//             top: 20,
//             left: 20,
//             bottom: 20,
//             right: 20,
//           }}
//           onPress={() => navigation.toggleDrawer()}>
//           <Icon
//             style={{width: 20}}
//             resizeMode="contain"
//             source={Res.images.icDrawer}
//           />
//         </Button>
//       )}
//       <RegularTitleWrapper pointerEvents="box-none">
//         {regularTitleTextElement}
//       </RegularTitleWrapper>
//     </Container>
//   );
// };

// export const DrawerLeft = props => {
//   const navigation = useNavigation();

//   return (
//     <Button
//       style={{
//         left: Res.spaces.md,
//       }}
//       hitSlop={{
//         top: 20,
//         left: 20,
//         bottom: 20,
//         right: 20,
//       }}
//       onPress={() => navigation.toggleDrawer()}>
//       <Icon
//         style={{width: 20}}
//         resizeMode="contain"
//         source={Res.images.icDrawer}
//       />
//     </Button>
//   );
// };
