import { Container, ContainerSucces } from './styles'
import { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { GoogleReCaptchaProvider } from '@google-recaptcha/react'
import validator from 'validator'

export function Form() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const verifyEmail = (email: string) => {
    setValidEmail(validator.isEmail(email))
  }

  useEffect(() => {
    if (isSubmitted) {
      toast.success('Email sent successfuly!', {
        position: 'bottom-left',
      })
    }
  }, [isSubmitted])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!captchaToken) {
      toast.error('Please complete the CAPTCHA')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/myyozglw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          message,
          'g-recaptcha-response': captchaToken,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setEmail('')
        setMessage('')
        setCaptchaToken(null)
      } else {
        toast.error(result?.message || 'Erro ao enviar.')
      }
    } catch (error) {
      toast.error('Erro na conexão.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <>
        <ContainerSucces>
          <h3>Obrigado por entrar em contato!</h3>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Voltar ao topo
          </button>
        </ContainerSucces>
        <ToastContainer />
      </>
    )
  }

  return (
    <>
      <Container>
        <h2>E-mail me directly</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              verifyEmail(e.target.value)
            }}
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <GoogleReCaptchaProvider
            siteKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            type="v3"
            // callback={setCaptchaToken}
          />

          <button
            type="submit"
            className='button'
            disabled={
              isSubmitting || !validEmail || !message || !captchaToken
            }
          >
            Send
          </button>
        </form>
      </Container>
      <ToastContainer />
    </>
  )
}
