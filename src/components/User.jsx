import UserProfile from "../images/facebookUser.png";

const User = ({ className }) => {
  return (
    <>
      <img src={UserProfile} alt="User's Profile" className={className} />
    </>
  );
};

export default User;
