import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function detectTheme(message: string): string {
  const text = message.toLowerCase();

  if (
    text.includes("login") ||
    text.includes("signin") ||
    text.includes("password")
  ) {
    return "Login Issues";
  }

  if (
    text.includes("slow") ||
    text.includes("performance") ||
    text.includes("lag")
  ) {
    return "Performance";
  }

  if (
    text.includes("payment") ||
    text.includes("upi") ||
    text.includes("refund")
  ) {
    return "Payments";
  }

  if (
    text.includes("ui") ||
    text.includes("design") ||
    text.includes("interface")
  ) {
    return "UI/UX";
  }

  if (
    text.includes("feature") ||
    text.includes("request") ||
    text.includes("add")
  ) {
    return "Feature Request";
  }

  if (
    text.includes("bug") ||
    text.includes("error") ||
    text.includes("crash")
  ) {
    return "Bug Report";
  }

  return "General";
}

export async function POST(req: NextRequest) {
  try {
    // Get workspace
    const workspace = await prisma.workspace.findFirst();

    if (!workspace) {
      return NextResponse.json(
        { message: "Workspace not found" },
        { status: 404 }
      );
    }

    const feedbacks = await prisma.feedback.findMany();

    for (const feedback of feedbacks) {
      const themeName = detectTheme(feedback.message);

      let theme = await prisma.theme.findFirst({
        where: {
          name: themeName,
          workspaceId: workspace.id,
        },
      });

      if (!theme) {
        theme = await prisma.theme.create({
          data: {
            name: themeName,
            description: `${themeName} detected automatically`,
            workspaceId: workspace.id,
          },
        });
      }

      const relation = await prisma.feedbackTheme.findFirst({
        where: {
          feedbackId: feedback.id,
          themeId: theme.id,
        },
      });

      if (!relation) {
        await prisma.feedbackTheme.create({
          data: {
            feedbackId: feedback.id,
            themeId: theme.id,
            confidence: 0.95,
          },
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: "Feedback analyzed successfully!",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Analysis failed",
      },
      {
        status: 500,
      }
    );
  }
}