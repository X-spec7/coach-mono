import { ILayoutProps } from '../types/common.type'
import Footer from './Footer'
import Header from './Header'

interface ISharedLayout extends ILayoutProps {
  headerTitle: string
  headerDescription: string
  isDetailPage?: boolean
}

const SharedLayout: React.FC<ISharedLayout> = ({
  children,
  headerTitle,
  headerDescription,
  isDetailPage
}) => {
  return (
    <div className='tw-flex tw-flex-col tw-gap-4 tw-p-4'>
      <Header
        title={headerTitle}
        description={headerDescription}
        isDetailPage={isDetailPage}
      />

      {children}

      <Footer />
    </div>
  )
}

export default SharedLayout
