import ButtonLink from "../components/ButtonLink";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header>Home</Header>
      <ButtonLink to="text" buttonVariant="contained" label="Go to text page" />
    </>
  );
};

export default HomePage;