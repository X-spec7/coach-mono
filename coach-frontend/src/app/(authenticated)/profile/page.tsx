import { Metadata } from 'next'

import { CoachProfilePage } from '@/features/profile'

export const metadata: Metadata = {
  title:
    "Coach Profile | COA-CH",
  description: "This is coach profile page for COA-CH",
}

const Profile = () => {
  return (
    <>
      <CoachProfilePage />
    </>
  )
}

export default Profile
