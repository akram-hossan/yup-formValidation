import React from 'react'
import AppGenericDropdown from './RawDropdownInput'
import { IDropdownInput } from '../../../@types'
import useAppForm from '../../hooks/useAppForm'

const DropdownInput: React.FC<IDropdownInput> = (props) => {
  const { errors, control, setValue, register } = useAppForm()

  let error = errors[props?.name!]?.message

  console.log(errors)

  if (props?.name?.includes('.')) {
    const formControls = props?.name?.split('.')
    error = errors?.[formControls[0]]?.[formControls[1]]?.message
  }

  return (
    <AppGenericDropdown
      error={error}
      control={control}
      setValue={setValue}
      register={register}
      {...props}
    />
  )
}

export default DropdownInput
