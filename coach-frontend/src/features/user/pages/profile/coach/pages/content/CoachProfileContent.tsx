'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import { useAppDispatch } from '@/redux/hook'
import { getProfileAsync, updateProfileAsync } from '@/features/user/slice/userSlice'
import { ProfilePayloadDTO } from '@/features/user/types'

const CoachProfileContent = () => {
  const dispatch = useAppDispatch()

  const [avatar, setAvatar] = useState<string | ArrayBuffer | null>(null)
  const [banner, setBanner] = useState<string | ArrayBuffer | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    experience: '',
    specialization: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        if (type === 'avatar') setAvatar(reader.result)
        if (type === 'banner') setBanner(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formDataToSubmit: ProfilePayloadDTO = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      address: formData.address,
      phone_number: formData.phone,
      years_of_experience: Number(formData.experience),
      specialization: formData.specialization,
      avatar_image: avatar,
      banner_image: banner,
    }

    try {
      dispatch(updateProfileAsync(formDataToSubmit))
        .unwrap()
        .then((result) => {
          setLoading(false)
        })
    } catch (err) {
      console.log('Profile update error: ', err)
      setError('Profile Update Failed')
      setLoading(false)
    }
  }

  return (
    <div className='tw-flex tw-flex-col tw-gap-8 tw-bg-white tw-rounded-4xl tw-w-full tw-p-8 tw-min-h-230'>
      <h2 className='tw-text-black tw-text-3xl tw-font-600 tw-w-full tw-text-center tw-mt-8 tw-mb-12'>Personal Profile</h2>

      <div className='tw-flex tw-justify-center tw-gap-20 tw-w-full'>
        
        {/* Left Side - Banner Image */}
        <div className='tw-flex tw-flex-col tw-gap-4 tw-w-1/2 tw-max-w-125'>
          <label className='tw-block tw-text-gray-500'>Banner Image</label>
          <div
            className='tw-relative tw-w-full tw-h-125 tw-bg-gray-bg tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-border tw-border-dashed tw-border-gray-300 tw-cursor-pointer'
          >
            <input
              type='file'
              accept='image/*'
              className='tw-absolute inset-0 tw-w-full tw-h-full tw-opacity-0 tw-cursor-pointer'
              onChange={(e) => handleFileChange(e, 'banner')}
            />
            {banner && typeof banner === 'string' ? (
              <Image
                src={banner}
                alt="Banner Preview"
                layout="fill"
              />
            ) : (
              <p className="tw-text-gray-30 tw-text-xl tw-font-medium">Drag and drop or click to upload</p>
            )}
          </div>
        </div>

        {/* Right Side - Avatar Image and Input Fields */}
        <div className='tw-flex tw-flex-col tw-gap-4 tw-w-1/2 tw-max-w-125'>
          <label className='tw-block tw-text-gray-500'>Avatar Image</label>
          <div
            className='tw-relative w-32 tw-h-32 tw-bg-gray-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-border tw-border-dashed tw-border-gray-300 tw-cursor-pointer'
          >
            <input
              type='file'
              accept='image/*'
              className='tw-absolute inset-0 tw-w-full tw-h-full tw-opacity-0 tw-cursor-pointer'
              onChange={(e) => handleFileChange(e, 'avatar')}
            />
            {avatar && typeof avatar === 'string' ? (
              <Image
                src={avatar}
                alt='Avatar Preview'
                fill
                className='tw-rounded-full'
              />
            ) : (
              <p className='tw-text-gray-30 tw-text-md tw-font-medium'>Upload</p>
            )}
          </div>

          {/* Text Inputs for User Info */}
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleInputChange}
            className='tw-w-full tw-p-2 tw-border tw-rounded-md'
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleInputChange}
            className='tw-w-full tw-p-2 tw-border tw-rounded-md'
          />
          <input
            type='text'
            name='address'
            placeholder='Address'
            value={formData.address}
            onChange={handleInputChange}
            className='tw-w-full tw-p-2 tw-border tw-rounded-md'
          />
          <input
            type='text'
            name='phone'
            placeholder='Phone Number'
            value={formData.phone}
            onChange={handleInputChange}
            className='tw-w-full tw-p-2 tw-border tw-rounded-md'
          />
          <input
            type='number'
            name='experience'
            placeholder='Years of Experience'
            value={formData.experience}
            onChange={handleInputChange}
            className='tw-w-full tw-p-2 tw-border tw-rounded-md'
          />
          <select
            name='specialization'
            value={formData.specialization}
            onChange={handleInputChange}
            className='tw-w-full tw-p-2 tw-border tw-rounded-md'
          >
            <option value=''>Select Specialization</option>
            <option value='fitness'>Fitness</option>
            <option value='nutrition'>Nutrition</option>
            <option value='life-coach'>Life Coach</option>
          </select>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className='tw-mt-6 tw-bg-green tw-text-black tw-py-3 tw-px-4 tw-rounded-md'
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Profile'}
          </button>

          {error && <p className='tw-text-red-500'>{error}</p>}
        </div>
      </div>
    </div>
  )
}

export default CoachProfileContent
