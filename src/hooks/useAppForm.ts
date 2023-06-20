import { useContext } from 'react'
import { AppFormContext } from '../components/AppForm'

const useAppForm = () => useContext(AppFormContext)

export default useAppForm
