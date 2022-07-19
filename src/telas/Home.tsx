import { useState } from 'react';
import { HStack, Heading, IconButton, VStack, useTheme, Text, FlatList } from 'native-base';

import { SignOut } from 'phosphor-react-native';
import Logo from '../assets/logo_secondary.svg';

import { Filter } from '../comp/Filter';
import { Order, OrderProps } from '../comp/Order';
import { Button } from '../comp/Button';

export function Home() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '1',
      patrimony: '123',
      when: '18/05/2020 às 10:00',
      status: 'open',
    },
    {
      id: '2',
      patrimony: '123',
      when: '18/05/2020 às 10:00',
      status: 'open',
    },
    {
      id: '3',
      patrimony: '123',
      when: '18/05/2020 às 10:00',
      status: 'open',
    },
    {
      id: '4',
      patrimony: '123',
      when: '18/05/2020 às 10:00',
      status: 'open',
    },
    {
      id: '5',
      patrimony: '123',
      when: '18/05/2020 às 10:00',
      status: 'open',
    }, {
      id: '6',
      patrimony: '123',
      when: '18/05/2020 às 10:00',
      status: 'open',
    }, {
      id: '7',
      patrimony: '123',
      when: '18/05/2020 às 10:00',
      status: 'open',
    },
  ]);

  const { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg="gray.700">

      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton
          icon={<SignOut size={26} color={colors.gray[300]} />}
        />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
          <Heading color="gray.100">
            Meus chamados
          </Heading>
          <Text color="gray.200">
            3
          </Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter type="open" title="em andamento"
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter type="closed" title="finalizados"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Order data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <VStack w="full" justifyContent="center" alignItems="center" mt={8}>
              <Text color="gray.200">
                Nenhum chamado {statusSelected === 'open' ? 'em andamento' : 'finalizado'} encontrado
              </Text>
            </VStack>
          )}
        />
        <Button title="Nova Solicitação" />

      </VStack>
    </VStack>
  );
}