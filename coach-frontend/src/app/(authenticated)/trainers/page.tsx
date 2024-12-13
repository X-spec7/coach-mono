import React from 'react';
import { Metadata } from 'next';
import TrainersPage from '@/features/trainers';

export const metadata: Metadata = {
  title:
    "Trainers | COA-CH",
  description: "This is Trainers for COA-CH",
};

const Trainers: React.FC = () => {
  return (
    <TrainersPage />
  )
}

export default Trainers
