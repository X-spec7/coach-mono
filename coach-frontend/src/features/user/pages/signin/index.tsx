'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/redux/hook'

import { loginAsync } from '../../userSlice/userSlice'

const SignInPage: React.FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      dispatch(loginAsync({ email, password }))
        .unwrap()
        .then((result) => {
          setLoading(false)
          router.push('/dashboard')
        })
      
    } catch (err) {
      console.error('Login error:', err)
      setError('Invalid email or password. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className='rounded-20 border border-stroke bg-white shadow-default max-w-screen-md'>
      <div className='flex flex-wrap items-center'>
        <div className='w-full'>
          <div className='w-full p-4 sm:p-12.5 xl:p-17.5'>
            <span className='mb-1.5 block font-medium'>Start for free</span>
            <h2 className='mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl'>
              Sign In to COA-CH
            </h2>

            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label className='mb-2.5 block font-medium text-black dark:text-white'>
                  Email
                </label>
                <div className='relative'>
                  <input
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                    placeholder='Enter your email'
                    className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                  />
                </div>
              </div>

              <div className='mb-6'>
                <label className='mb-2.5 block font-medium text-black dark:text-white'>
                  Password
                </label>
                <div className='relative'>
                  <input
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder='6+ Characters, 1 Capital letter'
                    className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                  />
                </div>
              </div>

              {error && (
                <div className='mb-4 text-red-500'>
                  {error}
                </div>
              )}

              <div className='mb-5'>
                <button
                  type='submit'
                  disabled={loading}
                  className='w-full cursor-pointer rounded-lg border border-green bg-green p-4 text-black text-xl font-medium transition hover:bg-opacity-90'
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>
              </div>

              <div className='mt-6 text-center'>
                <p>
                  Don’t have any account?{' '}
                  <Link href='/signup' className='text-primary'>
                    Sign Up
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

export default SignInPage
