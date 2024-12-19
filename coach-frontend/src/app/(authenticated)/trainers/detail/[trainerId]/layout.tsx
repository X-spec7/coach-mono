import { Header, Footer } from '@/shared/Layouts'
import { ILayoutProps } from '@/shared/types/common.type'

const layout: React.FC<ILayoutProps> = ({ children }) => {

  return (
    <div className='flex flex-col w-full gap-4 p-4'>
      <Header
        title='Trainer Details'
        description='Back To Trainer List'
        isDetailPage
      />

      {children}

      <Footer />
    </div>
  )
}

export default layout
