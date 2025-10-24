import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(Array.from(formData.entries()) as [string, string][]).toString(),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try emailing directly at mstojkovic955@gmail.com');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const floatingParticles = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1  rounded-full opacity-30"
      style={{
        left: `${10 + i * 10}%`,
      }}
      animate={{
        y: [typeof window !== 'undefined' ? window.innerHeight : 800, -100],
        rotate: [0, 360],
        opacity: [0, 0.3, 0.3, 0]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        delay: i * 2,
        ease: "linear"
      }}
    />
  ));

  return (
    <section id="contact" className="relative mt-12 sm:mt-16 md:mt-20 py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none">
        {floatingParticles}
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 sm:h-20 md:h-24 bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.header
            variants={itemVariants}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent px-2">
              Feel free to contact me
            </h2>
            <p className="text-cyan-400 font-medium text-base sm:text-lg px-2">
              Send me an e-mail or call me.
            </p>
          </motion.header>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16 px-2"
          >
            <motion.a
              href="mailto:mstojkovic955@gmail.com"
              className="group relative flex items-center gap-3 sm:gap-4 w-full sm:w-auto sm:max-w-md bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/20 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-500 hover:bg-cyan-400/20 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 overflow-hidden"
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-cyan-400 rounded-full flex items-center justify-center group-hover:bg-white group-hover:rotate-12 transition-all duration-300">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" />
              </div>
              <span className="text-white font-medium text-sm sm:text-base group-hover:text-cyan-100 transition-colors duration-300 break-all sm:break-normal">
                mstojkovic955@gmail.com
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-xl sm:rounded-2xl" />
            </motion.a>

            <motion.a
              href="tel:+381608058241"
              className="group relative flex items-center gap-3 sm:gap-4 w-full sm:w-auto sm:max-w-md bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/20 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-500 hover:bg-cyan-400/20 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 overflow-hidden"
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-cyan-400 rounded-full flex items-center justify-center group-hover:bg-white group-hover:rotate-12 transition-all duration-300">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" />
              </div>
              <span className="text-white font-medium text-sm sm:text-base group-hover:text-cyan-100 transition-colors duration-300">
                (381) 60805-8241
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-xl sm:rounded-2xl" />
            </motion.a>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto px-2"
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 overflow-hidden"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="absolute inset-0 bg-gradient-conic from-cyan-400/20 via-transparent to-cyan-400/20 animate-spin [animation-duration:20s] pointer-events-none" />
              <div className="relative z-10 space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }} className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-cyan-400 uppercase tracking-wider">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 transition-all duration-300" placeholder="Your name" />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }} className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-cyan-400 uppercase tracking-wider">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 transition-all duration-300" placeholder="E-mail address" />
                  </motion.div>
                </div>
                <motion.div whileFocus={{ scale: 1.02 }} className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-cyan-400 uppercase tracking-wider">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 transition-all duration-300" placeholder="What's this about?" />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }} className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-cyan-400 uppercase tracking-wider">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 transition-all duration-300 resize-vertical min-h-[100px] sm:min-h-[120px]" placeholder="Tell me about your project..." />
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="relative w-full py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out" />
                  <span className="relative flex items-center justify-center gap-1.5 sm:gap-2 uppercase tracking-wider">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <div className='text-white flex items-center gap-2 cursor-pointer'>
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
