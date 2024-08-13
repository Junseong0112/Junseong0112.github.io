import { useEffect, useRef, useState } from "react";

interface Props {
  id: string;
  children: React.ReactNode;
  onVisibilityChange: (id: string, isVisible: boolean) => void;
}

export default function Section({ id, children, onVisibilityChange }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const SectionRefCurrent = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const newIsVisible = entry.isIntersecting;
        setIsVisible(newIsVisible);
        onVisibilityChange(id, newIsVisible);
      },
      { threshold: 0.5 } // 50% 이상 보일 때 트리거
    );

    if (SectionRefCurrent) {
      observer.observe(SectionRefCurrent);
    }

    return () => {
      if (SectionRefCurrent) {
        observer.unobserve(SectionRefCurrent);
      }
    };
  }, [id, onVisibilityChange]);

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`h-screen snap-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-100"
      }`}
    >
      {children}
    </div>
  );
}
