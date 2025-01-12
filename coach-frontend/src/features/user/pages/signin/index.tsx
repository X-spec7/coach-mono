'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/redux/hook'

import { loginAsync } from '../../slice/userSlice'

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
          router.push('/dashboard')
        })
    } catch (err) {
      console.error('Login error:', err)
      setError('Invalid email or password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='tw-rounded-20 tw-border tw-border-stroke tw-bg-white tw-shadowdefault tw-max-w-screen-md'>
      <div className='tw-flex tw-flex-wrap tw-items-center'>
        <div className='tw-w-full'>
          <div className='tw-w-full tw-p-4 tw-sm:tw-p-12.5 tw-xl:tw-p-17.5'>
            <span className='tw-mb-1.5 tw-block tw-font-medium'>Start for free</span>
            <h2 className='tw-mb-9 tw-text-2xl tw-font-bold tw-text-black tw-sm:tw-text-title-xl'>
              Sign In to COA-CH
            </h2>

            <form onSubmit={handleSubmit}>
              <div className='tw-mb-4'>
                <label className='tw-mb-2.5 tw-block tw-font-medium tw-text-black'>
                  Email
                </label>
                <div className='tw-relative'>
                  <input
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                    placeholder='Enter your email'
                    className='tw-w-full tw-rounded-lg tw-border tw-border-stroke tw-bg-transparent tw-py-4 tw-pl-6 tw-pr-10 tw-text-black tw-outline-none tw-focus:tw-border-primary focus-visible:tw-shadownone'
                  />
                </div>
              </div>

              <div className='tw-mb-6'>
                <label className='tw-mb-2.5 tw-block tw-font-medium tw-text-black'>
                  Password
                </label>
                <div className='tw-relative'>
                  <input
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder='6+ Characters, 1 Capital letter'
                    className='tw-w-full tw-rounded-lg tw-border tw-border-stroke tw-bg-transparent tw-py-4 tw-pl-6 tw-pr-10 tw-text-black tw-outline-none tw-focus:tw-border-primary focus-visible:tw-shadownone'
                  />
                </div>
              </div>

              {error && (
                <div className='tw-mb-4 tw-text-red-500'>
                  {error}
                </div>
              )}

              <div className='tw-mb-5'>
                <button
                  type='submit'
                  disabled={loading}
                  className='tw-w-full tw-cursor-pointer tw-rounded-lg tw-border tw-border-green tw-bg-green tw-p-4 tw-text-black tw-text-xl tw-font-medium tw-transition tw-hover:tw-bg-opacity-90'
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>
              </div>

              <div className='tw-mt-6 tw-text-center'>
                <p>
                  Don’t have any account?{' '}
                  <Link href='/signup' className='tw-text-primary'>
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
