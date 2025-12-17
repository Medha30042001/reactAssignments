import UserInfo from "./UserInfo";

function UserProfile() {
  const name = "Medha";
  const age = 23;

  return (
    <>
      <h2>User Profile</h2>
      <UserInfo name={name} age={age} />
    </>
  );
}

export default UserProfile;
