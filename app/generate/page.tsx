const handlePDFDownload = () => {
  const doc = new jsPDF();
  const width = doc.internal.pageSize.getWidth();

  // Header
  doc.setFillColor(0, 0, 0);
  doc.rect(0, 0, width, 20, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.text("LegalFormat", 10, 13);

  // Title
  doc.setTextColor(0, 0, 0);
  doc.setFont("Times", "Bold");
  doc.setFontSize(18);
  doc.text(`Privacy Policy for ${website}`, width / 2, 30, {
    align: "center",
  });

  // Subline (PERSONALIZATION BOOST)
  doc.setFont("Times", "Normal");
  doc.setFontSize(10);
  doc.text(
    `This document is customized for ${website}`,
    width / 2,
    36,
    { align: "center" }
  );

  let y = 45;

  formattedPolicy.split("\n").forEach((line) => {
    if (y > 280) {
      doc.addPage();
      y = 20;
    }

    if (/^\d+\./.test(line)) {
      doc.setFont("Times", "Bold");
      doc.setFontSize(13);
    } else {
      doc.setFont("Times", "Normal");
      doc.setFontSize(11);
    }

    const split = doc.splitTextToSize(line, 180);
    doc.text(split, 10, y);
    y += split.length * 6;
  });

  doc.save(`${website}-privacy-policy.pdf`);
};
