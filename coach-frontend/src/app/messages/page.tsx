import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    "Messages | COA-CH",
  description: "This is Messages for COA-CH",
};

const MessagesPage: React.FC = () => {
  return (
    <div>
      Messages
    </div>
  )
}

export default MessagesPage
