import {RectButtonProps} from 'react-native-gesture-handler';

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

export interface IButton extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export interface ITransactionTypeButton extends RectButtonProps {
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

export interface ICategorySelectButton {
  title: string;
  onPress: () => void;
}

interface ICategoryProps {
  key: string;
  name: string;
}

export interface ICategorySelectProps {
  category: ICategoryProps;
  setCategory: (category: ICategoryProps) => void;
  closeSelectCategory: () => void;
}

export interface IPropsCategory {
  isActive: boolean;
}
