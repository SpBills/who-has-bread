import './globals.css'

export const metadata = {
  title: 'Who has bread?',
  description: 'An application for Living Water OPC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
