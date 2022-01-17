import Container from "@mui/material/Container";
import NewProject from "../components/NewProject/NewProject";

// const projects = [""];

const Home = () => {
  return (
    <div>
      <Container maxWidth="sm">
        {/* {projects ? (
          projects.map((project, id) => (
            <li key={id}>
              <p>{id}</p>
            </li>
          ))
        ) : ( */}
        <NewProject />
        {/* )} */}
      </Container>
    </div>
  );
};

export default Home;
