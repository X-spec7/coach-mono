import { ILayoutProps } from '@/shared/types/common.type'
import SharedLayout from '@/shared/Layouts/SharedLayout'

const Layout: React.FC<ILayoutProps> = ({ children }) => {

  return (
    <SharedLayout
      headerTitle='Statistics'
      headerDescription='Track Your Progress And Achievements'
    >
      {children}
    </SharedLayout>
  )
}

export default Layout
