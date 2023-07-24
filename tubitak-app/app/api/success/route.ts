import connectMongoDB from '@/libs/mongodb';
import Success from '@/models/success';
import { NextRequest, NextResponse } from 'next/server';
import { Types } from 'mongoose';

export async function POST(request: NextRequest) {
  const { title, description, date } = await request.json();
  await connectMongoDB();
  await Success.create({ title, description, date });
  return NextResponse.json({ message: 'Success created' }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const success = await Success.find();
  return NextResponse.json(success);
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Success.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Success deleted' }, { status: 200 });
}
