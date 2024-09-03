import Nav from './Nav';
import Filter from './Filter';

interface HeaderProps {
  showForm: () => void;
}

export default function Header({ showForm }: HeaderProps) {
  return (
    <header>
      <Nav showForm={showForm} />
      <Filter />
    </header>
  );
}
