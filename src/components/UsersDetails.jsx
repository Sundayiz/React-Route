import { useParams } from "react-router-dom";
export default function UsersDetails() {
  const { usersId } = useParams();

  return <div>Details About user {usersId}</div>;
}
