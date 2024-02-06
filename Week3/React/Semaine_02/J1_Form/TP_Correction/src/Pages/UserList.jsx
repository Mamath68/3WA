import { useReducer } from "react";
import { NavLink } from "react-router-dom";

import { reducer, initialState } from "../reducer/user";

function UserList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users, count } = state;

  return (
      <nav>
        <u>
          {count > 0 &&
            users.map((user) => (
              <li key={user.id}>
                <NavLink to={`/user/${user.id}`}>{user.name}</NavLink>
              </li>
            ))}
        </u>
      </nav>
  );
}

export default UserList;
