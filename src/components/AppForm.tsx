import { yupResolver } from '@hookform/resolvers/yup';
import React, { createContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'


interface IProps {
  onSubmit: (_data: any) => void
  children: React.ReactNode | Function
  schema: any
  defaultValues?: any
}

interface IInitialState {
  errors: any
  register: any
  setValue: Function
  reset?: Function
  control: any
}

export const AppFormContext = createContext<IInitialState>({
  errors: {},
  register: '',
  setValue: () => { },
  control: {}
})

const AppForm: React.FC<IProps> = ({
  children,
  onSubmit,
  schema,
  defaultValues,
}) => {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    reset(defaultValues)
  }, [JSON.stringify(defaultValues)])

  return (
    <AppFormContext.Provider value={{ errors, control, register, setValue, reset }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {typeof children === 'function'
          ? children({ errors, control, reset, register, getValues, setValue })
          : children}
      </form>
    </AppFormContext.Provider>
  )
}

export default AppForm
