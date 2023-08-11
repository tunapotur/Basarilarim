// https://www.youtube.com/watch?v=wNWyMsrpbz0&t=791s
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Success from "@/models/success";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newDescription: description,
    newDate: date,
  } = await request.json();
  await connectMongoDB();
  await Success.findByIdAndUpdate(id, { title, description, date });
  return NextResponse.json({ message: "Success updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const success = await Success.findOne({ _id: id });
  return NextResponse.json({ success }, { status: 200 });
}
