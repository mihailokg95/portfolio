import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ModalProvider } from './context/ModalContext'
gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ModalProvider>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </motion.div>
    </ModalProvider>
  )
}

export default App