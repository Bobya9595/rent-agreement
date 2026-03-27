"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import {
  Document,
  Packer,
  Paragraph,
  HeadingLevel,
  AlignmentType,
} from "docx";

export default function GeneratePage() {
  const [website, setWebsite] = useState("");
  const [policy, setPolicy] = useState("");

  // CLEAN
  const formattedPolicy = policy
    .replace(/\*\*/g, "")
    .replace(/#/g, "");

  // GENERATE
  const handleGenerate = async () => {
    const res = await fetch("/api/generate-policy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ website }),
    });

    const data = await res.json();
    setPolicy(data.policy);
  };

  // PDF
  const handlePDFDownload = () => {
    const doc = new jsPDF();
    const width = doc.internal.pageSize.getWidth();

    doc.text(`Privacy Policy for ${website}`, 10, 20);

    const lines = doc.splitTextToSize(formattedPolicy, 180);
    doc.text(lines, 10, 30);

    doc.save(`${website}.pdf`);
  };

  // WORD
  const handleWordDownload = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: `Privacy Policy for ${website}`,
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
            }),
            ...formattedPolicy.split("\n").map(
              (line) => new Paragraph({ text: line })
            ),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${website}.docx`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>LegalFormat</h1>

      <input
        placeholder="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />

      <button onClick={handleGenerate}>Generate</button>

      <pre>{formattedPolicy}</pre>

      <button onClick={handlePDFDownload}>PDF</button>
      <button onClick={handleWordDownload}>Word</button>
    </div>
  );
}
