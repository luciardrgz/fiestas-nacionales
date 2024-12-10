import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Festivales Argentinos",
  description: "Mapa de festivales argentinos con filtros por mes y provincia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3134613298811944"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="text-center bg-[#6CACE4] text-white">
          <h1 className="text-center text-3xl font-extrabold sm:py-4 max-sm:py-2 max-sm:tracking-tighter bg-[#6CACE4] text-white">
            Festivales Argentinos
          </h1>
          <p className="text-center text-sm bg-white text-red-500 leading-tight">
            <b>IMPORTANTE:</b> 'Cómo llegar' da una ubicación <u>aproximada</u>,
            no es exacta.
          </p>
        </header>

        {children}

        <footer className="text-center p-2 bg-gray-200 text-sm">
          © 2024 Festivales Argentinos.
        </footer>
      </body>
    </html>
  );
}
