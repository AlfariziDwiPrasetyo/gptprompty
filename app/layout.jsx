import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "gptprompty",
  description: "your coolest prompt",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <div className="app">
            <Nav />
            <main>{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
