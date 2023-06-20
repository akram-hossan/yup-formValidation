import {
  BoxProps,
  ContainerProps,
  InputProps,
  SelectProps,
} from '@chakra-ui/react'
import { TFunction } from 'i18next'

export interface IDemo {}

export interface IAppRawInput extends InputProps {
  borderRadius?: string
  inputLabel?: any
  inputSize?: string
  name: string
  error?: string
  setValue?: any
  watch?: any
  control?: any
  placeholder?: any 
  inputWidth?: string
  labelFontSize?: string
  labelFontWeight?: string | number
  value?: any
  register?: any
  type?: string
  placeholderFontSize?: any
  placeholderFontWeight?: string | number
  placeholderColor?: string
  AppendElement?: React.ReactElement
  AppendElementAddon?: React.ReactElement
  PreppendElement?: React.ReactElement
  variant?: string
  inputBg?: string
  otpType?: string
  mandatory?: boolean
}
export interface IAppInput extends IAppRawInput {
  name: string
}

export interface IOption {
  value: string
  label: string
}

export interface IDropdownInput extends IAppRawInput {
  inputOptions?: {
    label: string
    value: string
  }[]
  isAsync?: boolean
}

export interface IUploadedDocsView {
  images?: string[]
}

export interface IStepperSteps {
  id: number
  title: any
  active: boolean
  complete: boolean
}

export interface IDropdown{
  value:string
  label:string
}