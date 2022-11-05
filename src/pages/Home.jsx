import { useLoginContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useLoginContext();
  console.log(user);
  return <div>Home</div>;
};

export default Home;
