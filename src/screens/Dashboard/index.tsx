import React from 'react';

import HighlightCard from '../../components/HighlightCard';
import TransactionCard from '../../components/TransactionCard';
import {IDataListProps} from '../../types/types';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

const Dashboard: React.FC = () => {
  const data: IDataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de Site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'currency-usd',
      },
      date: '13/04/2020',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 59,00',
      category: {
        name: 'Alimentação',
        icon: 'food',
      },
      date: '10/04/2020',
    },

    {
      id: '3',
      type: 'negative',
      title: 'Aluguel',
      amount: 'R$ 1.200,00',
      category: {
        name: 'Casa',
        icon: 'shopping',
      },
      date: '10/04/2020',
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/78692782?v=4',
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Anderson</UserName>
            </User>
          </UserInfo>
          <Icon />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de Abril"
        />
        <HighlightCard
          type="down"
          title="Saidas"
          amount="R$ 1.259,00"
          lastTransaction="Última entrada dia 03 de Abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
