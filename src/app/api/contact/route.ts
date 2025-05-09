import { ServerResponse } from '@/types';
import { NextResponse } from 'next/server';

export async function POST(
  req: Request
): Promise<NextResponse<ServerResponse>> {
  const data = await req.formData();
  const username = data.get('name');
  console.log('Thank you for your interes', username);
  return NextResponse.json({
    isServerResponse: true,
    serverResponse: 'Message generated\n on the server'
  });
}
