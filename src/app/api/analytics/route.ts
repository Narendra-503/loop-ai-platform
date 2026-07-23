import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const total = await prisma.feedback.count();

    const positive = await prisma.feedback.count({
      where: { sentiment: "POSITIVE" },
    });

    const negative = await prisma.feedback.count({
      where: { sentiment: "NEGATIVE" },
    });

    const neutral = await prisma.feedback.count({
      where: { sentiment: "NEUTRAL" },
    });

    const reviewed = await prisma.feedback.count({
      where: { status: "REVIEWED" },
    });

    const actioned = await prisma.feedback.count({
      where: { status: "ACTIONED" },
    });

    const pending = await prisma.feedback.count({
      where: { status: "NEW" },
    });

    return NextResponse.json({
      total,
      positive,
      negative,
      neutral,
      reviewed,
      actioned,
      pending,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to load analytics" },
      { status: 500 }
    );
  }
}