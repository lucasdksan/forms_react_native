import { Input as NativeBaseInput, FormControl } from "native-base";

const Input = ({ errorMessage, isInvalid=true, ...rest }) => {
    const invalid = !!errorMessage || isInvalid;

    return (
        <FormControl mb={4} isInvalid={invalid}>
            <NativeBaseInput
                bg="amber.100"
                fontSize="md"
                h={16}
                isInvalid={invalid}
                _invalid={{
                    borderWidth: 2,
                    borderColor: "red.500"
                }}
                _focus={{
                    bg: "gray.200",
                    borderWidth: 2,
                    borderColor: "green"
                }}
                {...rest}
            />
            {
                errorMessage &&
                <FormControl.ErrorMessage>
                    { errorMessage }
                </FormControl.ErrorMessage>
            }
        </FormControl>
    );
}

export default Input;