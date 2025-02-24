import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME}. ${APP_DESCRIPTION}`,
  },
  description: APP_DESCRIPTION,
}

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="text-center flex-1 "> {children}</main>
      <Footer />
    </div>
  )
}
