interface NavItem {
  id: string;
  label: string;
}

interface Props {
  isVisible: boolean;
}

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "study", label: "Education & Study" },
  { id: "work", label: "Work & Project" },
];

export default function Navigation({ isVisible }: Props) {
  // 해당 ID 값의 View로 이동
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed bottom-[50px] w-full max-w-[1200px] left-1/2 transform -translate-x-1/2">
      <ul className="flex flex-col gap-5">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className="font-normal eng"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
