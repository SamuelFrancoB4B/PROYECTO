import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyecto Pro",
  description: "Dev by Samuel Franco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
