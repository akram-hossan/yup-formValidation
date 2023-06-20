import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Text,
  Textarea,
} from '@chakra-ui/react'
import React from 'react'
import { IAppRawInput } from '../../../@types'

const AppRawInput: React.FC<IAppRawInput> = ({
  AppendElement,
  PreppendElement,
  AppendElementAddon,
  borderRadius = '4px',
  inputLabel,
  inputSize = 'md',
  labelFontSize = 'xs',
  labelFontWeight = 400,
  inputWidth,
  error,
  name,
  value,
  variant,
  placeholder,
  type = 'text',
  register,
  defaultValue,
  placeholderFontSize = 'md',
  placeholderFontWeight = 400,
  placeholderColor = '#616161',
  inputBg,
  otpType = 'number',
  mandatory = false,
  ...restProps
}) => {
  console.log("redux value4 ", value)
  if (type !== 'textarea') {
    return (
      <>
        <FormControl position="relative" isInvalid={!!error}>
          {inputLabel && (
            <FormLabel
              position="absolute"
              top="-8px"
              left="8px"
              bg="white"
              px={2}
              zIndex="1"
              textColor="#616161"
              fontSize={labelFontSize}
              fontWeight={labelFontWeight}
            >
              {/* {inputLabel} * */}
              <Text>
                <Text as="span">{inputLabel}</Text>
                {mandatory ? (
                  <Text as="span" color="red" ml="1">
                    *
                  </Text>
                ) : null}
              </Text>
            </FormLabel>
          )}
          <InputGroup size={inputSize} variant={variant}>
            {AppendElement && (
              <InputLeftElement
                pointerEvents="none"
                // eslint-disable-next-line react/no-children-prop
                children={AppendElement}
              />
            )}
            {AppendElementAddon && (
              <InputLeftAddon
                pointerEvents="none"
                // eslint-disable-next-line react/no-children-prop
                children={AppendElementAddon}
              />
            )}
            <Input
              w={inputWidth}
              bg={inputBg}
              id={name}
              name={name}
              // paddingLeft="38px"
              {...(register ? { ...register(name) } : {})}
              type={type}
              placeholder={placeholder}
              _placeholder={{
                fontWeight: placeholderFontWeight,
                color: error ? 'red.400' : placeholderColor,
                fontSize: placeholderFontSize,
              }}
              // onKeyDown={type == 'number' ? handleKeyDown : () => {}}
              size={inputSize}
              value={value}
              border="1px solid #9E9E9E"
              errorBorderColor="red.300"
              focusBorderColor={error ? 'red.300' : '#109776'}
              // for focus border pixel customization
              // sx={{
              //   '&:focus': {
              //     boxShadow: 'none',
              //     border: '1px solid #109776',
              //   },
              // }}
              color="#212121"
              borderRadius={borderRadius}
              {...restProps}
              maxW="100%"
            />
            {PreppendElement && (
              <InputRightElement
                // eslint-disable-next-line react/no-children-prop
                children={PreppendElement}
                mr={1}
              />
            )}
          </InputGroup>
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
      </>
    )
  } else {
    return (
      <>
        <FormControl position="relative" isInvalid={!!error}>
          <InputGroup size={inputSize} variant={variant}>
            <Textarea
              w={inputWidth}
              bg={inputBg}
              id={name}
              name={name}
              // paddingLeft="38px"
              {...(register ? { ...register(name) } : {})}
              type={type}
              placeholder={placeholder}
              _placeholder={{
                fontWeight: placeholderFontWeight,
                color: error ? 'red.400' : placeholderColor,
                fontSize: placeholderFontSize,
              }}
              // onKeyDown={type == 'number' ? handleKeyDown : () => {}}
              size={inputSize}
              value={value}
              border="1px solid #9E9E9E"
              errorBorderColor="red.300"
              focusBorderColor={error ? 'red.300' : '#109776'}
              // for focus border pixel customization
              // sx={{
              //   '&:focus': {
              //     boxShadow: 'none',
              //     border: '1px solid #109776',
              //   },
              // }}
              color="#212121"
              borderRadius={borderRadius}
              {...restProps}
              maxW="100%"
            />
          </InputGroup>
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
      </>
    )
  }
}

export default AppRawInput
