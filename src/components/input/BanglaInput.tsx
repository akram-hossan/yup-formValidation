import React, { useState } from 'react'
import AppRawInput from './AppRawInput'
import { IAppRawInput } from '../../../../@types'

interface IBanglaInputProps extends IAppRawInput {}

const BanglaInput: React.FC<IBanglaInputProps> = ({
  error,
  register,
  ...restProps
}) => {
  const [isBangla, setIsBangla] = useState(true)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value
    const banglaRegex = /[\u0980-\u09FF]+/g
    setIsBangla(banglaRegex.test(inputText))
  }

  return (
    <AppRawInput
      error={isBangla ? error : 'বাংলা হরফে লিখুন'}
      register={register}
      onChange={handleInput}
      {...restProps}
    />
  )
}

export default BanglaInput
