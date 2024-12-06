import { DefaultLayout } from '@/components/Layouts'
import { LayoutProps } from '@/types/common'

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  )
}

export default Layout
