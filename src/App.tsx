
import './App.css'
// Import Installed Modules
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form"

interface SelectField {
  gender: { value: string | null, label: string }
  hobbies: { value: string, label: string }[]
}

const schema = yup.object({
  gender: yup.object({
    value: yup.string().required("Please select a gender! LaLaLa"),
  }),
  hobbies: yup.array().required("Please select a hobby").min(1, "Please select a hobby"),
})

function App() {
  const { control, handleSubmit, formState: { errors } } = useForm<SelectField>({
    resolver: yupResolver(schema)
  });

  const submitHandler = (values: SelectField) => { console.log(values) }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Controller
        name="gender"
        control={control}
        defaultValue={{ value: null, label: "Select Gender" }} // Update defaultValue
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: null, label: "Select Gender" }, // Placeholder option
              { value: "M", label: "Male" },
              { value: "F", label: "Female" }
            ]}
            placeholder="Select Gender" // Use placeholder prop for initial rendering
          />
        )}
      />
      <p style={{ color: "red" }}>{errors.gender?.value?.message}</p>

      <Controller
        name="hobbies"
        control={control}
        render={({ field }) => (
          <Select
            isMulti
            {...field}
            options={[
              // { value: null, label: "Select your Hobbies" }, // Placeholder option
              { value: "Cooking", label: "Cooking" },
              { value: "Singing", label: "Singing" }
            ]}
            placeholder="Select your Hobbies" // Use placeholder prop for initial rendering
          />
        )}
      />
      <p style={{ color: "red" }}>{errors.hobbies?.message}</p>

      <button type="submit">Submit</button>
    </form>
  )
}

export default App
