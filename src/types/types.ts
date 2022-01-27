import {TouchableOpacityProps} from 'react-native';

export interface IHiglightCard {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total';
}

export interface ITypeProps {
  type: 'up' | 'down' | 'total';
}

interface ICategory {
  key?: string;
  name: string;
  icon: string;
}

interface ITransactionCardsProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: ICategory;
  date: string;
}

export interface ITransactionCard {
  data: ITransactionCardsProps;
}

export interface ITransactionTypes {
  type: 'positive' | 'negative';
}

export interface IDataListProps extends ITransactionCardsProps {
  id: string;
}

export interface IButton extends TouchableOpacityProps {
  title: string;
}

export interface ITransactionTypeButton extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

export interface IIconsProps {
  type: 'up' | 'down';
}

export interface IContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}
