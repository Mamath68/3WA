import { useParams } from "react-router-dom";
import { useReducer, useEffect } from "react";
import { initialState, reducer } from "../reducer/user";

function User() {
  const { userId } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = state;

  // on dispatch dans le reducer l'id de l'utilisateur à récupérer
  useEffect(() => {
    dispatch({ type: "GET_USER", id: userId });
  }, [userId]);

  if (user)
    return (
      <ul>
        <li>ID : {user?.id}</li>
        <li>{user?.name}</li>
        <li>{user?.address}</li>
      </ul>
    );

  return (
    <ul>
      <li>Aucun utilisateur trouvé</li>
    </ul>
  );
}

export default User;
