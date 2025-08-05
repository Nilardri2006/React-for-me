import React from 'react'
import { useForm } from "react-hook-form"


const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm()

  async function onSubmit(data) {
    //Api call ko simulate karu
    await new Promise((resolve)=>setTimeout(resolve,5000));
    console.log(data, "Submitting the form")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>

        <label>First Name: </label>
        <input className={errors.firstName ?'input-error':""}
         {...register('firstName',
          {
            required: true,
            minLength: { value: 3, message: "Min len atleast 3" },
            maxLength: { value: 6, message: "Max len atleast 6"}
          })} />
          {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}

      </div>
      <br />
      <div>

        <label>Middle Name: </label>
        <input className={errors.middleName ?'input-error':""}
        {...register('middleName')} />

      </div>
      <br />

      <div>

        <label>Last Name: </label>
        <input className={errors.lastName ?'input-error':""}
        {...register('lastName',
          {
            pattern:
            {
              value: /^[A-Za-z]+$/i,
              message: "last name not as per rules"
            } 
          }
        )} />
        {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}

      </div>

      <br />
      <input type='Submit' disabled={isSubmitting} value ={isSubmitting? "Submitting":"Submit"} />

    </form>
  )
}

export default App
