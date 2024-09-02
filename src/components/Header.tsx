import Nav from "./Nav";
import Filter from "./Filter";

export default function Header({ showForm }) {
  return (
    <header>
      <Nav showForm={showForm} />
      <Filter />
    </header>
  );
}
