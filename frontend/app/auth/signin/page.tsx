'use client'

import React, { useState, useEffect, FormEvent, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Vortex } from '../../../components/ui/vortex'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'

declare global {
  interface Window {
    hcaptcha?: {
      render: (container: HTMLElement, config: Record<string, any>) => string | number
      reset: (widgetId: string | number) => void
    }
    onHCaptchaLoad?: () => void
  }
}

const BACKEND_URL = typeof window !== 'undefined' && window.location.hostname !== 'localhost'
  ? '' // Use relative URLs in production (nginx proxy)
  : (process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080")
const HCAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [motionAllowed, setMotionAllowed] = useState(true)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [captchaError, setCaptchaError] = useState('')
  const captchaContainerRef = useRef<HTMLDivElement | null>(null)
  const captchaWidgetId = useRef<string | number | null>(null)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    // Check if user is already logged in
    const token = localStorage.getItem('access_token')
    if (token) {
      router.push('/')
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem('reduce-motion');
    if (stored !== null) {
      setMotionAllowed(stored !== 'true');
      return;
    }
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMotionAllowed(!media.matches);
  }, []);

  const resetCaptcha = useCallback(() => {
    if (typeof window !== 'undefined' && window.hcaptcha && captchaWidgetId.current !== null) {
      window.hcaptcha.reset(captchaWidgetId.current)
    }
    setCaptchaToken(null)
  }, [])

  const renderCaptcha = useCallback(() => {
    if (!HCAPTCHA_SITE_KEY || typeof window === 'undefined') return
    if (!captchaContainerRef.current || !window.hcaptcha) return
    if (captchaWidgetId.current !== null) {
      window.hcaptcha.reset(captchaWidgetId.current)
    }
    captchaWidgetId.current = window.hcaptcha.render(captchaContainerRef.current, {
      sitekey: HCAPTCHA_SITE_KEY,
      callback: (token: string) => {
        setCaptchaToken(token)
        setCaptchaError('')
      },
      'error-callback': () => {
        setCaptchaToken(null)
        setCaptchaError('Doğrulama başarısız oldu, lütfen tekrar deneyin.')
      },
      'expired-callback': () => {
        setCaptchaToken(null)
        setCaptchaError('Doğrulama süresi doldu, lütfen tekrar deneyin.')
      }
    })
  }, [])

  useEffect(() => {
    if (!HCAPTCHA_SITE_KEY || typeof window === 'undefined') return
    const scriptId = 'hcaptcha-script'
    const initialize = () => {
      if (window.hcaptcha) {
        renderCaptcha()
      }
    }

    const existingScript = document.getElementById(scriptId)
    if (existingScript) {
      if (window.hcaptcha) {
        initialize()
      } else {
        window.onHCaptchaLoad = initialize
      }
      return
    }

    window.onHCaptchaLoad = initialize
    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://js.hcaptcha.com/1/api.js?onload=onHCaptchaLoad&render=explicit'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      if (window.onHCaptchaLoad === initialize) {
        delete window.onHCaptchaLoad
      }
    }
  }, [renderCaptcha])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (HCAPTCHA_SITE_KEY && !captchaToken) {
        setError('Lütfen robot olmadığınızı doğrulayın.')
        setLoading(false)
        return
      }

      const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email, // Use email as username for backend
          password,
          captcha_token: captchaToken,
        }),
      })

      const data = await response.json()

      if (response.ok && data.access_token) {
        // Store token in localStorage for client-side use
        localStorage.setItem('access_token', data.access_token)
        window.dispatchEvent(new Event('auth-token-updated'))

        // Get user details
        const userResponse = await fetch(`${BACKEND_URL}/api/auth/me`, {
          headers: {
            'Authorization': `Bearer ${data.access_token}`,
          },
        })

        if (userResponse.ok) {
          const user = await userResponse.json()
          localStorage.setItem('user', JSON.stringify(user))
          console.log('User logged in:', user.username)
        }

        router.push('/')
      } else {
        setError(data.detail || 'Giriş bilgileri hatalı. Lütfen tekrar deneyin.')
        if (HCAPTCHA_SITE_KEY) {
          resetCaptcha()
        }
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('Bir hata oluştu. Lütfen tekrar deneyin.')
      if (HCAPTCHA_SITE_KEY) {
        resetCaptcha()
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 w-full h-full">
      {/* Vortex Background */}
      {motionAllowed ? (
        <div className="absolute inset-0 z-0">
          <Vortex
            backgroundColor="black"
            rangeY={1200}
            particleCount={450}
            baseHue={280}
            baseSpeed={0.04}
            rangeSpeed={0.3}
            baseRadius={0.7}
            rangeRadius={1}
            className="flex flex-col items-center justify-center w-full h-full px-2 py-4 md:px-10"
          >
            {/* Empty children for background effect */}
          </Vortex>
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-black" />
      )}

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md px-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-black/80 backdrop-blur-md border border-white/20 rounded-xl p-8 text-center">


                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="email" className="text-left block text-white/90">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="user@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="password" className="text-left block text-white/90">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                    />
                  </motion.div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-sm text-red-400 text-center"
                    >
                      {error}
                    </motion.p>
                  )}

                  {HCAPTCHA_SITE_KEY && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1 }}
                      className="flex flex-col items-center space-y-2"
                    >
                      <div ref={captchaContainerRef} className="h-captcha" />
                      {captchaError && (
                        <p className="text-xs text-red-400 text-center">{captchaError}</p>
                      )}
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-6 bg-white text-black font-medium rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Logging in...' : 'Login'}
                    </button>
                  </motion.div>
                </form>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="mt-6"
                >
                  <button
                    onClick={() => router.push('/auth/signup')}
                    className="w-full py-3 px-6 bg-white text-black font-medium rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all duration-200 shadow-lg"
                  >
                    Sign up
                  </button>
                </motion.div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
