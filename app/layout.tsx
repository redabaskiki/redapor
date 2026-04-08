 import "./globals.css";
 
type RootLayoutProps = {
  children: React.ReactNode;
};
// 1. Add iosevka to the exported fonts in this layout
 


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
       
    >
      <body className="antialiased min-h-screen bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[#0F2027] text-white">
        {children}
      </body>
    </html>
  );
}
