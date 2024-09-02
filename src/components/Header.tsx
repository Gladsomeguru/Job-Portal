import Nav from './Nav';

interface HeaderProps {
  showForm: () => void;
}

export default function Header({ showForm }: HeaderProps) {
  return (
    <header>
      <Nav showForm={showForm} />
    </header>
  );
}
