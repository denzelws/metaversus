import '../styles/globals.css'

interface RootProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootProps) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body>{children}</body>
  </html>
)

export default RootLayout
