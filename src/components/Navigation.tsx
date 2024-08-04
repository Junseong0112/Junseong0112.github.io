interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "study", label: "Education & Study" },
  { id: "work", label: "Work & Project" },
];

export default function Navigation() {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <button className="font-normal eng">{item.label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
