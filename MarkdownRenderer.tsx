import React from "react";

function parseInline(text: string, isDark: boolean): string {
  const strongCls = isDark
    ? "font-bold text-green-300"
    : "font-bold text-gray-900";
  const codeCls = isDark
    ? "bg-green-950 text-green-300 border border-green-800 px-1.5 py-0.5 rounded text-sm font-mono"
    : "bg-gray-100 text-gray-800 border border-gray-200 px-1.5 py-0.5 rounded text-sm font-mono";
  let out = text;
  out = out.replace(/\*\*(.*?)\*\*/g, `<strong class="${strongCls}">$1</strong>`);
  out = out.replace(/\*(.*?)\*/g, `<em class="italic opacity-80">$1</em>`);
  out = out.replace(/`(.*?)`/g, `<code class="${codeCls}">$1</code>`);
  return out;
}

interface Props {
  content: string;
  isDark?: boolean;
  accentClass?: string;
}

export default function MarkdownRenderer({
  content,
  isDark = false,
  accentClass = "text-green-400",
}: Props) {
  if (!content) return null;

  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];

  const textCls = isDark ? "text-gray-200" : "text-gray-700";
  const mutedCls = isDark ? "text-gray-400" : "text-gray-500";
  const dividerCls = isDark ? "border-green-900" : "border-gray-200";
  const dotCls = isDark ? "bg-green-400" : "bg-gray-400";

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="space-y-2 my-3 ml-1">
          {currentList}
        </ul>
      );
      currentList = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) { flushList(); continue; }

    if (line.startsWith("#")) {
      flushList();
      const level = line.match(/^#+/)?.[0].length ?? 1;
      const text = line.replace(/^#+\s/, "");
      if (level === 1) {
        elements.push(
          <h1 key={`h-${i}`} className={`text-2xl md:text-3xl font-extrabold ${accentClass} mb-4 mt-8`}>
            {text}
          </h1>
        );
      } else if (level === 2) {
        elements.push(
          <h2 key={`h-${i}`} className={`text-xl font-bold ${accentClass} mb-3 mt-7 pb-2 border-b ${dividerCls}`}>
            {text}
          </h2>
        );
      } else {
        elements.push(
          <h3 key={`h-${i}`} className={`text-lg font-semibold ${textCls} mb-2 mt-5`}>
            {text}
          </h3>
        );
      }
      continue;
    }

    const listMatch = line.match(/^([-*]|\d+\.)\s+(.*)/);
    if (listMatch) {
      currentList.push(
        <li key={`li-${i}`} className="flex items-start gap-3">
          <span className={`mt-2 w-1.5 h-1.5 rounded-full ${dotCls} shrink-0`} />
          <span
            className={`text-base leading-relaxed ${textCls}`}
            dangerouslySetInnerHTML={{ __html: parseInline(listMatch[2], isDark) }}
          />
        </li>
      );
      continue;
    }

    if (line.startsWith("**") && line.endsWith("**")) {
      flushList();
      elements.push(
        <p key={`bold-${i}`} className={`font-bold ${accentClass} text-base mt-5 mb-2`}>
          {line.slice(2, -2)}
        </p>
      );
      continue;
    }

    flushList();
    elements.push(
      <p
        key={`p-${i}`}
        className={`text-base leading-relaxed ${mutedCls} my-2`}
        dangerouslySetInnerHTML={{ __html: parseInline(line, isDark) }}
      />
    );
  }

  flushList();
  return <div>{elements}</div>;
}