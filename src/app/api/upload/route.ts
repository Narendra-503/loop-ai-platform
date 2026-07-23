import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as XLSX from "xlsx";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { message: "No file uploaded" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const workbook = XLSX.read(buffer, {
      type: "buffer",
    });

    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet);

    const workspace = await prisma.workspace.findFirst();

    if (!workspace) {
      return NextResponse.json(
        { message: "Workspace not found" },
        { status: 404 }
      );
    }

    const positiveWords = [
      "good",
      "great",
      "excellent",
      "amazing",
      "love",
      "fast",
      "easy",
      "best",
      "awesome",
      "happy",
    ];

    const negativeWords = [
      "bad",
      "poor",
      "slow",
      "failed",
      "error",
      "worst",
      "issue",
      "problem",
      "late",
      "bug",
    ];

    for (const row of rows as any[]) {
      const text = (row.feedback || "").toLowerCase();

      let sentiment: "POSITIVE" | "NEGATIVE" | "NEUTRAL" = "NEUTRAL";

      if (positiveWords.some((word) => text.includes(word))) {
        sentiment = "POSITIVE";
      }

      if (negativeWords.some((word) => text.includes(word))) {
        sentiment = "NEGATIVE";
      }

      await prisma.feedback.create({
        data: {
          customer: row.customer || "Unknown",
          message: row.feedback || "",
          source: "CSV Upload",
          sentiment,
          workspaceId: workspace.id,
        },
      });
    }

    return NextResponse.json({
      message: `${rows.length} feedback imported successfully`,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Upload failed" },
      { status: 500 }
    );
  }
}