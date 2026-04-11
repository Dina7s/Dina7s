import resumeMarkdown from "../data/resume.md?raw";

export function ResumePreview() {
  return (
    <div className="panel max-h-[34rem] overflow-auto">
      <pre className="whitespace-pre-wrap text-sm leading-7 text-[var(--color-soft)]">{resumeMarkdown}</pre>
    </div>
  );
}
