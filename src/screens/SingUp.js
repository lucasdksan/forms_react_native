import { VStack, Heading, Center } from "native-base";
import { useForm, Controller } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";

const SingUp = ()=>{
    const { control, handleSubmit } = useForm();

    function handlSignUp(data){
        console.log(data)
    }

    return(
        <VStack bgColor="gray.300" flex={1} px={10}>
            <Center>
                <Heading my={24} fontSize="xl">Crie sua conta</Heading>
                <Controller 
                    control={control} 
                    name="name"
                    render={({ field: { onChange } })=>(
                        <Input placeholder="Nome"  onChange={onChange}/>
                    )}
                />  
                <Controller 
                    control={control} 
                    name="email"
                    render={({ field: { onChange } })=>(
                        <Input placeholder="E-mail"  onChange={onChange}/>
                    )}
                /> 
                <Controller 
                    control={control} 
                    name="password"
                    render={({ field: { onChange } })=>(
                        <Input placeholder="Senha"  onChange={onChange}/>
                    )}
                /> 
                <Controller 
                    control={control} 
                    name="password_confirm"
                    render={({ field: { onChange } })=>(
                        <Input placeholder="Confirmar Senha"  onChange={onChange}/>
                    )}
                />
                <Button title="Cadastrar" onPress={handleSubmit(handlSignUp)}/>
            </Center>
        </VStack>
    );
}

export default SingUp;