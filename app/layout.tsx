 import { oswald, poppins, roboto } from "./fonts";
import "./globals.css";
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${poppins.variable}  ${oswald.variable}`}
    >
      <body className="antialiased min-h-screen bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[#0F2027] text-white">
        {children}
      </body>
    </html>
  );
}
