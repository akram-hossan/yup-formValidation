import React from 'react'
import AppGenericInput from './AppRawInput'
import { IAppInput } from '../../../@types'
import useAppForm from '../../hooks/useAppForm'

const AppInput: React.FC<IAppInput> = (props) => {
  const { errors, register } = useAppForm()

  let error = errors[props?.name]?.message
  console.log(error);
  if (props?.name?.includes('.')) {
    const formControls = props?.name?.split('.')
    error = errors[formControls[0]]?.[formControls[1]]?.message
  }
  return <AppGenericInput error={error} register={register} {...props} />
}

export default AppInput
