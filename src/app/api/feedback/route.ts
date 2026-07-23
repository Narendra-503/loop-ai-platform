import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    const skip = (page - 1) * limit;

    const total = await prisma.feedback.count();

    const feedbacks = await prisma.feedback.findMany({
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      feedbacks,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch feedback" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { customer, feedback } = await req.json();

    const workspace = await prisma.workspace.findFirst();

    if (!workspace) {
      return NextResponse.json(
        { message: "Workspace not found" },
        { status: 404 }
      );
    }

    const newFeedback = await prisma.feedback.create({
      data: {
        customer,
        source: "Manual",
        message: feedback,
        sentiment: "NEUTRAL",
        status: "NEW",
        workspaceId: workspace.id,
      },
    });

    return NextResponse.json(
      {
        message: "Feedback added successfully",
        feedback: newFeedback,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, status } = await req.json();

    const updatedFeedback = await prisma.feedback.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    return NextResponse.json({
      message: "Status updated successfully",
      feedback: updatedFeedback,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to update status" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    await prisma.feedback.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      message: "Feedback deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Delete failed" },
      { status: 500 }
    );
  }
}