import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
} from '@chakra-ui/react'
import { IDropdownInput } from '../../../@types'
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { Controller } from "react-hook-form";

const RawDropdownInput: React.FC<IDropdownInput> = ({
  borderRadius = '4px',
  inputLabel,
  inputSize = 'md',
  labelFontSize = 'xs',
  labelFontWeight = 400,
  inputWidth,
  error,
  setValue,
  control,
  name,
  value,
  variant,
  placeholder,
  type = 'text',
  register,
  inputBg,
  defaultValue,
  otpType = 'number',
  mandatory = false,
  inputOptions,
  isAsync = false,
  ...restProps
}) => {



  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleSelect = (selected: any) => {
  //   setSelectedOption(selected);
  // };


  const customStyles = {
    option: (defaultStyles: any, state: { isSelected: any, isDisabled: any, isFocused: any }) => ({
      ...defaultStyles,
      color: state.isFocused ? '#109776' : 'rgba(0, 0, 0, 0.6)',
      borderRight: state.isFocused ? '5px solid #109776' : 'none',
      backgroundColor: "white",
      fontSize: "16px",
      ":active": {
        backgroundColor: "lightgrey",
      },
    }),

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: "none",
      color: "black",
      border: "1px solid #9E9E9E",
      padding: "10px",
      boxShadow: "none",
      ":active": {
        // borderColor: { error ? "2px solid red" : '2px solid #109776'}
      },
      ":hover": {
        borderColor: "lightgrey"
      },

    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: "black" }),
  };

  const loadOptions = (
    inputValue: any,
    callback: (arg0: any) => void) => {
    setTimeout(() => {
      const filteredOptions = inputOptions!.filter((option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      callback(filteredOptions);
    }, 2000);
  };


  return (
    <>
      <FormControl position="relative" isInvalid={error ? true : false}>
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

        <Controller
          name={name!}
          control={control}
          // rules={{ required: 'This Field is required' }}
          render={({ field }) =>
            isAsync ?
              <AsyncSelect
                {...field}
                // id={name}
                // name={name}
                placeholder="নির্বাচন করুন"
                // onSelect={handleSelect}
                loadOptions={loadOptions}
                defaultOptions
                styles={{
                  menu: provided => ({ ...provided, zIndex: 9999 }),
                  ...customStyles,
                }}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
              :
              <Select
                {...field}
                // id={name}
                // name={name}
                placeholder="নির্বাচন করুন"
                options={inputOptions}
                // onMenuClose={handleSelect}
                styles={{
                  menu: provided => ({ ...provided, zIndex: 9999 }),
                  ...customStyles,
                }}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
          }
          {...restProps}
        />

        {error ? <FormErrorMessage>Select an option</FormErrorMessage> : null}
      </FormControl>
    </>
  )
}

export default RawDropdownInput
