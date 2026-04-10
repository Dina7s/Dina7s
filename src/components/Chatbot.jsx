import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function buildAnswer(input, profile) {
  const query = input.toLowerCase();

  if (query.includes("scb") || query.includes("standard chartered") || query.includes("current role")) {
    const current = profile.experience[0];
    return `${profile.name} is currently working as ${current.role} at ${current.company}. The role focuses on ${current.highlights.slice(0, 3).join(" ")}`;
  }

  if (query.includes("skill")) {
    return `Key strengths include ${profile.skills.slice(0, 8).join(", ")}. The broader profile is strongest in banking operations, static data, controls, and process improvement.`;
  }

  if (query.includes("project")) {
    return `Suggested portfolio directions are ${profile.projects.map((project) => project.name).join(", ")}. These are designed to connect banking operations experience with practical digital workflow ideas.`;
  }

  if (query.includes("contact") || query.includes("email") || query.includes("reach")) {
    return `You can reach ${profile.name} by email at ${profile.contact.email}. GitHub is available at ${profile.contact.github}.`;
  }

  if (query.includes("experience") || query.includes("background")) {
    return `${profile.name} has experience across ${profile.experience.length} roles, with current leadership experience in trade-related static data operations and earlier work in digital advertising and research support.`;
  }

  if (query.includes("resume")) {
    return "You can download the improved resume PDF from the hero section. A structured JSON version also exists for portfolio and profile use.";
  }

  return "I can help with background, SCB responsibilities, skills, project ideas, contact details, or resume questions. Try one of the quick prompts below.";
}

export function Chatbot({ profile }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "bot", text: profile.chatbot.greeting }]);

  const suggestions = useMemo(() => profile.chatbot.suggestions, [profile.chatbot.suggestions]);

  function ask(question) {
    const cleaned = question.trim();
    if (!cleaned) return;

    const answer = buildAnswer(cleaned, profile);
    setMessages((current) => [
      ...current,
      { role: "user", text: cleaned },
      { role: "bot", text: answer }
    ]);
    setInput("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    ask(input);
  }

  return (
    <div className="chatbot-shell">
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="chatbot"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="chatbot-panel"
          >
            <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-accent)]">Assistant</p>
                <h3 className="mt-1 text-lg font-semibold text-[var(--color-text)]">Portfolio Chat</h3>
              </div>
              <button type="button" className="theme-toggle" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>

            <div className="max-h-[22rem] space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={
                      message.role === "user"
                        ? "chatbot-bubble-user max-w-[85%]"
                        : "chatbot-bubble-bot max-w-[90%]"
                    }
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 px-4 pb-3">
              {suggestions.map((item) => (
                <button key={item} type="button" className="chatbot-chip" onClick={() => ask(item)}>
                  {item}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2 border-t border-[var(--color-line)] p-4">
              <input
                className="chatbot-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about experience, skills, projects, or contact"
              />
              <button className="chatbot-send" type="submit">
                Send
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!open ? (
        <button type="button" className="chatbot-fab" onClick={() => setOpen(true)} aria-label="Open chatbot">
          Chat
        </button>
      ) : null}
    </div>
  );
}
