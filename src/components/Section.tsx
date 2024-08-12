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
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // if (entry.isIntersecting) {
        //   // 섹션이 화면에 보일 때 실행할 로직
        //   console.log(`Section ${id} is visible`);
        //   console.log(isVisible);
        // }
        const newIsVisible = entry.isIntersecting;
        setIsVisible(newIsVisible);
        onVisibilityChange(id, newIsVisible);
      },
      { threshold: 0.5 } // 50% 이상 보일 때 트리거
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
