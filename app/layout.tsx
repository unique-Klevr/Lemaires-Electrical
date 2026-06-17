import './globals.css'

export const metadata = {
  title: 'Lemaires Electrical Services',
  description: 'Premium Electrical Services Built on Trust & Integrity',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
