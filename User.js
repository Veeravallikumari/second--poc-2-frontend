import Usercard from "./Usercard";


function User() {
    let userData=sessionStorage.getItem("user")
    userData=JSON.parse(userData);
  return (
    <> 
  <Usercard user={userData}/>
  </>       
  );
}

export default User;