import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // TODO: Add your email sending logic here (e.g., Resend, Nodemailer)
    // For now, we'll just return a success response
    console.log('Contact form submission:', body);
    
    return NextResponse.json(
      { success: true, message: 'Message received!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}