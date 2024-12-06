'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/redux/hook'

import { registerAsync } from '../../authSlice/authSlice'
import { RegisterPayloadDTO } from '../../types/authTypes'

const SignUpPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [formData, setFormData] = useState<RegisterPayloadDTO>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'Client',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name as keyof typeof formData]: value }))
  }

  const validateForm = () => {
    const { firstName, lastName, email, password, confirmPassword, userType } = formData
    if (!firstName || !lastName || !email || !password) {
      return 'All fields are required.'
    }
    if (password !== confirmPassword) {
      return 'Passwords do not match.'
    }
    // Add further validation if necessary, e.g., email format
    return null
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    try {
      setIsSubmitting(true)

      console.log('I am about to send register: ', formData)

      dispatch(registerAsync(formData))
        .unwrap()
        .then((result) => {
          // TODO: Navigate to Email Verification Page
          console.log('registered successfully: ', result)
          router.push('/signin')
        })
    } catch (err) {
      setError('Registration failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='rounded-sm border border-stroke bg-white shadow-default min-w-150'>
      <div className='flex flex-wrap items-center w-full'>
        <div className='w-full border-stroke xl:border-l-2'>
          <div className='w-full p-4 sm:p-12.5 xl:p-17.5'>
            <span className='mb-1.5 block font-medium'>Start for free</span>
            <h2 className='mb-9 text-2xl font-bold text-black sm:text-title-xl2'>
              Sign Up to COA-CH
            </h2>

            <form onSubmit={handleRegister}>
              {error && <p className='text-red-500'>{error}</p>}
              {Object.keys(formData).map((key) => (
                <div className='mb-4' key={key}>
                  <label className='mb-2.5 block font-medium text-black'>
                    {key.charAt(0).toUpperCase() + key.slice(1).replace('Password', ' Password')}
                  </label>
                  <input
                    type={key.includes('password') || key.includes('Password') ? 'password' : 'text'}
                    name={key}
                    placeholder={`Enter your ${key}`}
                    className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none'
                    value={formData[key as keyof typeof formData]}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 disabled:opacity-50'
              >
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
              </button>

              <div className='mt-6 text-center'>
                <p>
                  Already have an account?{' '}
                  <Link href='/signin' className='text-primary'>
                    Sign in
                  </Link>
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
