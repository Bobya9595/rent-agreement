const handlePDFDownload = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  let y = 45;
  let pageNumber = 1;

  // 🔷 Function to draw header
  const drawHeader = () => {
    doc.setFillColor(0, 0, 0);
    doc.rect(0, 0, pageWidth, 20, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.text("LegalFormat", 10, 13);
  };

  // 🔷 Function to draw footer
  const drawFooter = () => {
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text(
      `Page ${pageNumber}`,
      pageWidth - 20,
      pageHeight - 10
    );
  };

  // 🔷 First Page Header
  drawHeader();

  // 🔷 Title
  doc.setTextColor(0, 0, 0);
  doc.setFont("Times", "Bold");
  doc.setFontSize(18);
  doc.text(`Privacy Policy for ${website}`, pageWidth / 2, 30, {
    align: "center",
  });

  // 🔷 Subline
  doc.setFont("Times", "Normal");
  doc.setFontSize(10);
  doc.text(
    `This document is customized for ${website}`,
    pageWidth / 2,
    36,
    { align: "center" }
  );

  // 🔷 Content
  formattedPolicy.split("\n").forEach((line) => {
    if (y > pageHeight - 20) {
      drawFooter();
      doc.addPage();
      pageNumber++;

      drawHeader();
      y = 25;
    }

    if (/^\d+\./.test(line)) {
      doc.setFont("Times", "Bold");
      doc.setFontSize(13);
      y += 4;
    } else {
      doc.setFont("Times", "Normal");
      doc.setFontSize(11);
    }

    const split = doc.splitTextToSize(line, 180);
    doc.text(split, 15, y);
    y += split.length * 6;
  });

  // 🔷 Final Footer
  drawFooter();

  doc.save(`${website}-privacy-policy.pdf`);
};
