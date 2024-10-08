// pages/[id]/index.jsx
import { useRouter } from 'next/router';

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query; // Dynamic parameter ko access karein

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default UserProfile;
