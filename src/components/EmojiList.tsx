import React, { useEffect, useState } from "react";

const EmojiList: React.FC = () => {
  const [emojis, setEmojis] = useState<string[]>([]);

  useEffect(() => {
    const emojiArray: string[] = ["😊", "🎉", "✨", "🌟", "🔥"];

    emojiArray.forEach((emoji: string, index: number) => {
      setTimeout(() => {
        setEmojis((prevEmojis: string[]) => [...prevEmojis, emoji]);
      }, index * 1000);
    });
  }, []);

  return (
    <div>
      {emojis.map((emoji: string, index: number) => (
        <span key={index}>{emoji}</span>
      ))}
    </div>
  );
};

export default EmojiList;
