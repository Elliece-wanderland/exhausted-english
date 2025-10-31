
import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("Hello! Let's learn English!");
  const speak = () => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-emerald-700">Kids English TTS App</h1>
      <textarea
        className="border rounded-xl p-3 w-80 h-32 mb-4"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700"
        onClick={speak}
      >
        🔊 Speak Text
      </button>
    </div>
  );
}
