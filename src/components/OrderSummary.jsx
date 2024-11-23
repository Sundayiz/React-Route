import { useNavigate } from "react-router-dom";
export default function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div>Order confirmed!</div>
      <button onClick={() => navigate("/")}>Go Back</button>
    </>
  );
}
