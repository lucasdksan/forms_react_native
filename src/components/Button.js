import { Button as NativeBaseButton, Text } from "native-base"

const Button = ({ title, ...rest })=>{
    return(
        <NativeBaseButton 
            w="full"
            h={16}
            bg="green.700"
            _pressed={{
                bgColor: "green.900"
            }}
            { ...rest } 
        >
            <Text color="white" fontSize="md">{title}</Text>
        </NativeBaseButton>
    );
}

export default Button;