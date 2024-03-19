import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Proyecto de Samuelito",
    template: "%s | Proyecto Samuel",
  },
  description: "Dev by Samuel Franco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
         <header
           style={{
            backgroundColor: "lightblue",
            padding: "1rem",
      }}>
        <p>Header</p>
      </header>
      {children}
      <footer
           style={{
             backgroundColor: "lightblue",
             padding: "1rem",
      }}>
      
        <p>Footer</p>
        </footer></body>
    </html>
  );
}
