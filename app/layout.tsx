// layout.tsx
import './globals.css';
import Navbar from './components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-800 text-white">
        <Navbar /> {/* Navbar added globally */}
        <main>{children}</main>
      </body>
    </html>
  );
}
