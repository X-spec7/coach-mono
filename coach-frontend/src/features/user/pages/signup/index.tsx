'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/redux/hook'

import { registerAsync } from '../../slice/userSlice'
import { RegisterPayloadDTO } from '../../types/auth.type'

const SignUpPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'Client',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name as keyof typeof formData]: value }))
  }

  const validateForm = () => {
    const { firstName, lastName, email, password, confirmPassword, userType } = formData
    if (!firstName || !lastName || !email || !password || !userType) {
      return 'All fields are required.'
    }
    if (password !== confirmPassword) {
      return 'Passwords do not match.'
    }
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

      const registerPayload: RegisterPayloadDTO = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        user_type: formData.userType
      }

      dispatch(registerAsync(registerPayload))
        .unwrap()
        .then((result) => {
          router.push('/signin')
        })
      
    } catch (err) {
      setError('Registration failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='tw-border tw-border-stroke tw-bg-white tw-rounded-20 tw-shadowdefault tw-min-w-150'>
      <div className='tw-flex tw-flex-wrap tw-items-center tw-w-full'>
        <div className='tw-w-full'>
          <div className='tw-w-full tw-p-4 tw-sm:tw-p-12.5 tw-xl:tw-p-17.5'>
            <span className='tw-mb-1.5 tw-block tw-font-medium'>Start for free</span>
            <h2 className='tw-mb-9 tw-text-2xl tw-font-bold tw-text-black tw-sm:tw-text-title-xl2'>
              Sign Up to COA-CH
            </h2>

            <form onSubmit={handleRegister}>
              {error && <p className='tw-text-red-500'>{error}</p>}
              {Object.keys(formData).map((key) => (
                key !== 'userType' ? (
                  <div className='tw-mb-8 tw-flex tw-items-center tw-gap-4' key={key}>
                    <label
                      className='tw-font-medium tw-text-black tw-min-w-32'
                      htmlFor={key}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1).replace('Password', ' Password')}
                    </label>
                    <input
                      type={key.includes('password') || key.includes('Password') ? 'password' : 'text'}
                      id={key}
                      name={key}
                      placeholder={`Enter your ${key}`}
                      className='tw-flex-1 tw-rounded-lg tw-border tw-border-stroke tw-bg-transparent tw-py-2 tw-px-4 tw-text-black tw-outline-none tw-focus:tw-border-primary focus-visible:tw-shadownone'
                      value={formData[key as keyof typeof formData]}
                      onChange={handleChange}
                    />
                  </div>
                ) : (
                  <div className='tw-mb-8 tw-flex tw-items-center tw-gap-4' key={key}>
                    <label
                      className='tw-font-medium tw-text-black tw-min-w-32'
                      htmlFor={key}
                    >
                      User Type
                    </label>
                    <select
                      id={key}
                      name="userType"
                      value={formData.userType}
                      onChange={handleChange}
                      className="tw-flex-1 tw-rounded-lg tw-border tw-border-stroke tw-bg-transparent tw-py-2 tw-px-4 tw-text-black tw-outline-none tw-focus:tw-border-primary focus-visible:tw-shadownone"
                    >
                      <option value="Client" className="tw-py-2">Client</option>
                      <option value="Coach" className="tw-py-2">Coach</option>
                    </select>
                  </div>
                )
              ))}
              <button
                type='submit'
                disabled={isSubmitting}
                className='tw-w-full tw-cursor-pointer tw-rounded-lg tw-border tw-border-green tw-bg-green tw-p-2 tw-text-black tw-text-lg tw-font-medium tw-transition tw-hover:tw-bg-opacity-90 disabled:tw-opacity-50'
              >
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
              </button>

              <div className='tw-mt-6 tw-text-center'>
                <p>
                  Already have an account?{' '}
                  <Link href='/signin' className='tw-text-primary'>
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
