import {IContainerProps, IIconsProps} from './../../../types/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RectButton} from 'react-native-gesture-handler';
import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View<IContainerProps>`
  width: 48%;

  border-width: ${({isActive}) => (isActive ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.text};
  border-radius: 5px;

  ${({isActive, type}) =>
    isActive &&
    type === 'up' &&
    css`
      background-color: ${({theme}) => theme.colors.sucess_light};
    `};

  ${({isActive, type}) =>
    isActive &&
    type === 'down' &&
    css`
      background-color: ${({theme}) => theme.colors.attention_light};
    `};
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px;
`;

export const Icon = styled(MaterialCommunityIcons)<IIconsProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({theme, type}) =>
    type === 'up' ? theme.colors.sucess : theme.colors.attention};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
