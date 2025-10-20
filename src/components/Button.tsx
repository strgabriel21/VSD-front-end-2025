"use client";

interface ButtonProps {
  text: string;
  onClick(): void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={() => onClick()}
      className="p-3.5 transition animate-pulse bg-amber-400 rounded-2xl hover:bg-amber-700"
    >
      {text}
    </button>
  );
}
