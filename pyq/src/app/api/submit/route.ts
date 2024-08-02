

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { branch, semester, subject } = await request.json();

  if (!branch || !semester || !subject) {
    return NextResponse.json({ error: 'Branch, semester, and subject are required' }, { status: 400 });
  }



  return NextResponse.json({ message: 'Values received', branch, semester, subject }, { status: 200 });
}
