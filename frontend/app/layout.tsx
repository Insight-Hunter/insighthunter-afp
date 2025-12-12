import "../styles/globals.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="theme-dark">
        <header className="app-header">
          <div className="logo">InsightHunter</div>
          <div className="profile">Company Portal</div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
