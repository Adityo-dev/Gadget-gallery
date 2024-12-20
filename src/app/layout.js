import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/shared/navigationBar/navigationBar";
import Footer from "@/shared/footer/footer";
import LiveChat from "@/components/liveChat/liveChat";
import { CartProvider } from "@/components/context/CartContext";
import { WishlistProvider } from "@/components/context/WishlistContext";
// react tost
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gadget gallery",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <WishlistProvider>
            <NavigationBar />
            {children}
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Footer />
            <LiveChat />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
