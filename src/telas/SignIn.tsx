import { useState } from 'react';
import { VStack, Heading, Icon, useTheme } from 'native-base';
import Logo from '../assets/logo_primary.svg';
import { Input } from '../comp/Input';
import { Button } from '../comp/Button';
import { Envelope, Key } from 'phosphor-react-native';

export function SignIn() {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const { colors } = useTheme();

    function handleSignIn() {
    }

    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Logo />
            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
            </Heading>

            <Input
                placeholder="E-mail"
                mb={4}
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
                onChangeText={text => setNome(text)}
            />

            <Input
                mb={8}
                placeholder="Senha"
                InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
                secureTextEntry
                onChangeText={text => setSenha(text)}

            />

            <Button title="Entrar" w="full" mb={2} onPress={handleSignIn} />

        </VStack>
    );
}
