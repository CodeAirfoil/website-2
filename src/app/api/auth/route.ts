import { NextRequest, NextResponse } from 'next/server'

const SITE_PASSWORD = process.env.SITE_PASSWORD || 'airfoil2024'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (password === SITE_PASSWORD) {
      const response = NextResponse.json({ success: true })
      
      // Set authentication cookie
      response.cookies.set('site-auth', 'authenticated', {
        httpOnly: false, // Allow client-side access for middleware
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/'
      })
      
      return response
    } else {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}
