export interface IHiglightCard {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total';
}

export interface ITypeProps {
  type: 'up' | 'down' | 'total';
}
