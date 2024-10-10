import "./globals.css"

export const metadata = {
  title: "Ventura Venues",
  description: "Booking app using Next, Appwrite and Tailwind",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
