import NextAuth from 'next-auth'
import type { NextAuthConfig, User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

declare module 'next-auth' {
  interface Session {
    user: {
      picture?: string
      another?: string
    } & Omit<User, 'id'>
  }
}
declare module 'next-auth' {
  interface User {
    picture?: string
    another?: string
  }
}

export const authConfig = {
  debug: process.env.NODE_ENV === 'development',
  providers: [
    Credentials({
      credentials: { password: { label: 'Password', type: 'password' } },
      authorize(c) {
        if (c.password !== '1') return null
        return {
          id: '1',
          name: 'Rabius Sunny',
          email: 'rabiussunnyc3x@gmail.com',
          image: 'https://www.image.com',
          picture: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
          another: 'value',
        }
      },
    }),
  ],
  callbacks: {
    authorized(params) {
      return !!params.auth?.user
    },
    async jwt({ token, user }) {
      if (user) {
        token.picture = user.picture
        token.another = user.another
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.picture = token.picture as string
        session.user.another = token.another as string
      }
      return session
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
