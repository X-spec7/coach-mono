import SharedLayout from '@/shared/Layouts/SharedLayout'
import { ILayoutProps } from '@/shared/types/common.type'

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <SharedLayout
      headerTitle='Trainer Detail'
      headerDescription='Back to Trainer List'
      isDetailPage
    >
      {children}
    </SharedLayout>
  )
}

export default Layout
