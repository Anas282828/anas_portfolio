import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "/src/components/footer";
import Navbar from "/src/components/navbar";
import "/src/css/card.scss";
import "/src/css/globals.scss";
import ScrollToTop from "/src/components/helper/scroll-to-top";

export const metadata = {
  title: "Portfolio de Anas Mahhou",
  description:
    "Je m'appelle Anas Mahhou, et je suis un programmeur passionné et curieux, avec un fort esprit d'auto-apprentissage. J'aime explorer de nouvelles technologies et résoudre des problèmes complexes. Fortement intéressé par le développement web, logiciel et mobile, je m'efforce de créer des expériences utilisateur intuitives et élégantes. Compétent en JavaScript, j'utilise ce langage pour divers projets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the favicon here */}
        <link rel="icon" href="./favicon.png" />
      </head>
      <body className="font-sans">
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
