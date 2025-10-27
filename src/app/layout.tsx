import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="w-screen h-screen m-0 p-0 relative">
        <Link className="absolute top-2 right-2" href="/opening">
          홈
        </Link>
        {children}
      </body>
    </html>
  );
}
