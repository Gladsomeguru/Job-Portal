interface NavProps {
  showForm: () => void;
}

export default function Nav({ showForm }: NavProps) {
  return (
    <nav>
      <img className="logo" src="./logo.png" alt="logo" />
      <h5>Home</h5>
      <h5>Find Jobs</h5>
      <h5>Find Talents</h5>
      <h5>About Us</h5>
      <h5>Testimonial</h5>
      <h5 className="create" onClick={showForm}>
        Create Jobs
      </h5>
    </nav>
  );
}
