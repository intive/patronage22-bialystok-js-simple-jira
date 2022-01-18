import ButtonLink from "../components/ButtonLink";
import Header from "../components/Header";

const TextPage = () => {
  return (
    <>
      <Header>Text</Header>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias doloremque temporibus, est eius modi sequi harum cum id necessitatibus non in, facilis reprehenderit corrupti voluptatem quisquam optio rem vitae delectus!
      </p>
      <ButtonLink to="/" buttonVariant="outlined" label="Back to home" />
    </>
  );
};

export default TextPage;