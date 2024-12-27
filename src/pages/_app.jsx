import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import '../globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
