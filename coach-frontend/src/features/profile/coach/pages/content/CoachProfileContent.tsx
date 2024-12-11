'use client'

import { ChangeEvent, useState } from 'react'
import Image from 'next/image'

const CoachProfileContent = () => {
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

  return (
    <div className='flex flex-col gap-8 bg-white rounded-4xl w-full p-8 min-h-230'>
      <h2 className='text-black text-3xl font-600 w-full text-center mt-8 mb-12'>Personal Profile</h2>

      <div className='flex justify-center gap-20 w-full'>
        
        {/* Left Side - Banner Image */}
        <div className='flex flex-col gap-4 w-1/2 max-w-125'>
          <label className='block text-gray-500'>Banner Image</label>
          <div
            className='relative w-full h-125 bg-gray-bg rounded-lg flex items-center justify-center border border-dashed border-gray-300 cursor-pointer'
          >
            <input
              type='file'
              accept='image/*'
              className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
              onChange={(e) => handleFileChange(e, 'banner')}
            />
            {banner && typeof banner === 'string' ? (
              <Image
                src={banner}
                alt="Banner Preview"
                layout="fill"
              />
            ) : (
              <p className="text-gray-30 text-xl font-medium">Drag and drop or click to upload</p>
            )}
          </div>
        </div>

        {/* Right Side - Input Fields */}
        <div className='flex flex-col gap-4 w-1/2 max-w-125'>
          <label className='block text-gray-500'>Avatar Image</label>
          <div
            className='relative w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center border border-dashed border-gray-300 cursor-pointer'
          >
            <input
              type='file'
              accept='image/*'
              className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
              onChange={(e) => handleFileChange(e, 'avatar')}
            />
            {avatar && typeof avatar === 'string' ? (
              <Image
                src={avatar}
                alt='Avatar Preview'
                fill
                className='rounded-full'
              />
            ) : (
              <p className='text-gray-30 text-md font-medium'>Upload</p>
            )}
          </div>

          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleInputChange}
            className='w-full p-2 border rounded-md'
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleInputChange}
            className='w-full p-2 border rounded-md'
          />
          <input
            type='text'
            name='address'
            placeholder='Address'
            value={formData.address}
            onChange={handleInputChange}
            className='w-full p-2 border rounded-md'
          />
          <input
            type='text'
            name='phone'
            placeholder='Phone Number'
            value={formData.phone}
            onChange={handleInputChange}
            className='w-full p-2 border rounded-md'
          />
          <input
            type='number'
            name='experience'
            placeholder='Years of Experience'
            value={formData.experience}
            onChange={handleInputChange}
            className='w-full p-2 border rounded-md'
          />
          <select
            name='specialization'
            value={formData.specialization}
            onChange={handleInputChange}
            className='w-full p-2 border rounded-md'
          >
            <option value=''>Select Specialization</option>
            <option value='fitness'>Fitness</option>
            <option value='nutrition'>Nutrition</option>
            <option value='life-coach'>Life Coach</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default CoachProfileContent
