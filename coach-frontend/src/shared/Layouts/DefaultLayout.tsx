import Sidebar from '@/shared/Layouts/Sidebar'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <div className='tw-flex tw-w-full tw-min-h-screen tw-bg-gray-bg'>
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className='tw-relative tw-flex-1'>

          {/* <main className='tw-h-[calc(100%-32px)]'> */}
          <main className='tw-h-full'>
            <div className='tw-mx-auto tw-h-full'>
              {children}
            </div>
          </main>
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
    </>
  )
}
