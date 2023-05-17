import { Protected } from "@/layouts/Protected";

const Home = () => {
  return (
    <Protected>
      <p>Authenticated</p>
    </Protected>
  );
};

export default Home;
