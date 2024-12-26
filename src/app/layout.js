import Layout from "@/layout/Layout"
import "./globals.css"
import { yekan } from "@/utils/font"
import NextAuthProvider from "@/providers/NextAuthProvider"

export const metadata = {
  title: 'املاک',
  description: 'سایت خرید و فروش املاک',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" data-new-gr-c-s-check-loaded="14.1147.0"
      data-gr-ext-installed="">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  )
}
