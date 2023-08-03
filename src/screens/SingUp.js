import { VStack, Heading, Center } from "native-base";
import Input from "../components/Input";
import Button from "../components/Button";

const SingUp = ()=>{
    return(
        <VStack bgColor="gray.300" flex={1} px={10}>
            <Center>
                <Heading my={24} fontSize="xl">Crie sua conta</Heading>
            </Center>
            <Input placeholder="Nome" errorMessage="Nome invalido"/>
            <Input placeholder="E-mail" errorMessage="E-mail invalido"/>
            <Input placeholder="Senha" errorMessage="Senha invalida"/>
            <Input placeholder="Confirmar Senha" errorMessage="Senha incompativel"/>
            <Button title="Cadastrar"/>
        </VStack>
    );
}

export default SingUp;