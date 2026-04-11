const page = {
  width: 210,
  height: 297,
  marginX: 16,
  marginTop: 15,
  marginBottom: 16
};

function cleanInline(text) {
  return text
    .replace(/\*\*/g, "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1: $2")
    .trim();
}

function addWrappedText(doc, text, x, y, options = {}) {
  const {
    width = page.width - page.marginX * 2,
    font = "helvetica",
    style = "normal",
    size = 9.2,
    color = [39, 48, 63],
    lineHeight = 5
  } = options;

  doc.setFont(font, style);
  doc.setFontSize(size);
  doc.setTextColor(...color);

  const lines = doc.splitTextToSize(cleanInline(text), width);
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
}

function ensureSpace(doc, y, needed = 18) {
  if (y + needed < page.height - page.marginBottom) {
    return y;
  }

  doc.addPage();
  return page.marginTop;
}

function sectionTitle(doc, title, y) {
  y = ensureSpace(doc, y, 14);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(120, 63, 30);
  doc.text(title.toUpperCase(), page.marginX, y);
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.35);
  doc.line(page.marginX, y + 2.3, page.width - page.marginX, y + 2.3);
  return y + 7;
}

function addBullet(doc, text, y) {
  y = ensureSpace(doc, y, 11);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(39, 48, 63);
  doc.text("•", page.marginX + 1.5, y);
  return addWrappedText(doc, text, page.marginX + 6, y, {
    width: page.width - page.marginX * 2 - 6,
    size: 9,
    lineHeight: 4.7
  }) + 1.1;
}

function parseMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const title = cleanInline(lines.find((line) => line.startsWith("# "))?.replace("# ", "") || "Resume");
  const contact = cleanInline(lines[1] || "");
  const sections = [];
  let current = null;

  for (const line of lines.slice(2)) {
    if (line.startsWith("## ")) {
      current = { title: cleanInline(line.replace("## ", "")), blocks: [] };
      sections.push(current);
      continue;
    }

    if (!current) continue;

    if (line.startsWith("### ")) {
      current.blocks.push({ type: "role", text: cleanInline(line.replace("### ", "")) });
    } else if (line.startsWith("- ")) {
      current.blocks.push({ type: "bullet", text: cleanInline(line.replace("- ", "")) });
    } else if (line.trim()) {
      current.blocks.push({ type: "text", text: cleanInline(line) });
    }
  }

  return { title, contact, sections };
}

export async function downloadResumePdf(markdown, fileName = "Dinakaran-S-Resume.pdf") {
  const { jsPDF } = await import("jspdf");
  const { title, contact, sections } = parseMarkdown(markdown);
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  let y = page.marginTop;

  doc.setFillColor(248, 242, 232);
  doc.rect(0, 0, page.width, 34, "F");
  doc.setTextColor(17, 24, 39);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(21);
  doc.text(title, page.marginX, y);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(154, 52, 18);
  doc.text("Team Lead - Banking Operations / Static Data", page.marginX, y + 7);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.8);
  doc.setTextColor(71, 85, 105);
  doc.text(contact, page.marginX, y + 13);
  y = 41;

  sections.forEach((section) => {
    y = sectionTitle(doc, section.title, y);
    const isSkills = section.title === "Core Skills";
    let skillBuffer = [];

    section.blocks.forEach((block, index) => {
      if (isSkills && block.type === "bullet") {
        skillBuffer.push(block.text);
        const isLast = index === section.blocks.length - 1;
        if (!isLast) return;
      }

      if (skillBuffer.length) {
        y = ensureSpace(doc, y, 18);
        y = addWrappedText(doc, skillBuffer.join(" | "), page.marginX, y, {
          size: 8.9,
          lineHeight: 4.8,
          color: [39, 48, 63]
        }) + 3;
        skillBuffer = [];
      }

      if (block.type === "role") {
        y = ensureSpace(doc, y, 13);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10.5);
        doc.setTextColor(15, 23, 42);
        doc.text(block.text, page.marginX, y);
        y += 5;
      } else if (block.type === "bullet") {
        y = addBullet(doc, block.text, y);
      } else {
        y = addWrappedText(doc, block.text, page.marginX, y, {
          size: 9.1,
          lineHeight: 4.9
        }) + 2;
      }
    });

    y += 1.5;
  });

  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i += 1) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    doc.setTextColor(148, 163, 184);
    doc.text(`Dinakaran S | Resume | Page ${i} of ${totalPages}`, page.marginX, page.height - 8);
  }

  doc.save(fileName);
}
