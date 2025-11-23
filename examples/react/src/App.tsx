import { nonnanable } from '@hairy/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import './App.css'

const player = yup.object({
  name: yup.string()
    .required('Please enter your name'),
  password: yup.string()
    .required('Please enter your password'),
  confirmPassword: yup.string()
    .required('Please enter your confirm password')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  email: yup.string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  age: yup.number()
    .transform(nonnanable)
    .required('Please enter your age')
    .min(18, 'You must be at least 18 years old'),
  friends: yup.string()
    .required('Please enter your friends'),
  relative: yup.array()
    .min(1, 'Please enter your relative')
    .of(
      yup.object({
        name: yup.string()
          .required('Please enter your relative name'),
        age: yup.number()
          .transform(nonnanable)
          .required('Please enter your relative age')
          .min(18, 'You must be at least 18 years old'),
      }),
    ),
})

function App() {
  const form = useForm({
    defaultValues: {
      name: '',
    },
    resolver: yupResolver(player),
  })

  function onSubmit() {
    // console.log(data)
  }

  return (
    <>
      <form style={{ display: 'flex', flexDirection: 'column', gap: 10 }} onSubmit={form.handleSubmit(onSubmit)}>
        <input {...form.register('name')} />
        {form.formState.errors.name?.message}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
