import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};
