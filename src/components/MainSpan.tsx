const TEXT = ["코", "드", "를", "그", "리", "다."];

export default function MainSpan() {
  return (
    <>
      {TEXT.map((char, idx) => (
        <span key={idx} className="text-62">
          {char}
        </span>
      ))}
    </>
  );
}
