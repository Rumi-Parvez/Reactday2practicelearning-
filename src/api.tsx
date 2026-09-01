import { use } from "react";
import UserCard from "./user";

function Users({ userDataPromise }: any) {
const users = use(userDataPromise);

  return (
   <div>
     <h3>Users: {users.length}</h3>
     {
        users.map(user => <UserCard user={user}></UserCard>)
     }
   </div>


  )



}

export default Users;