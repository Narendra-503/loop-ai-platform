import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    const workspace = await prisma.workspace.findFirst();

    if (!workspace) {
      return NextResponse.json(
        { message: "Workspace not found" },
        { status: 404 }
      );
    }

    const demoFeedback = [
      {
        customer: "Rahul",
        source: "Support Ticket",
        message: "The login page takes too long to load.",
        sentiment: "NEGATIVE",
      },
      {
        customer: "Priya",
        source: "App Store",
        message: "The latest update is fantastic and very smooth.",
        sentiment: "POSITIVE",
      },
      {
        customer: "Kiran",
        source: "NPS Survey",
        message: "The application is okay but needs better performance.",
        sentiment: "NEUTRAL",
      },
      {
        customer: "Anjali",
        source: "Community",
        message: "Love the new dashboard design!",
        sentiment: "POSITIVE",
      },
      {
        customer: "Arjun",
        source: "Sales Call",
        message: "Customer requested dark mode support.",
        sentiment: "NEUTRAL",
      },
      {
        customer: "Sneha",
        source: "Support Ticket",
        message: "Payment keeps failing during checkout.",
        sentiment: "NEGATIVE",
      },
      {
        customer: "Vijay",
        source: "App Store",
        message: "Excellent application with beautiful UI.",
        sentiment: "POSITIVE",
      },
      {
        customer: "Meena",
        source: "Community",
        message: "Notifications arrive very late.",
        sentiment: "NEGATIVE",
      },
      {
        customer: "Ravi",
        source: "NPS Survey",
        message: "Overall experience was good.",
        sentiment: "POSITIVE",
      },
      {
        customer: "Divya",
        source: "Support Ticket",
        message: "The search feature could be improved.",
        sentiment: "NEUTRAL",
      },
    ];

    await prisma.feedback.createMany({
      data: demoFeedback.map((item) => ({
        customer: item.customer,
        source: item.source,
        message: item.message,
        sentiment: item.sentiment as
          | "POSITIVE"
          | "NEGATIVE"
          | "NEUTRAL",
        workspaceId: workspace.id,
      })),
    });

    return NextResponse.json({
      message: `${demoFeedback.length} demo feedback imported successfully`,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Import failed" },
      { status: 500 }
    );
  }
}