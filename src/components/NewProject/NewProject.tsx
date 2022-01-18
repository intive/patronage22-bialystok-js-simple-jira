import AutoAwesomeTwoToneIcon from "@mui/icons-material/AutoAwesomeTwoTone";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const data = {
  text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  buttonCreateProject: "New project",
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.common.black,
  height: 60,
  lineHeight: "60px",
}));

const NewProject = () => {
  return (
    <Container>
      <Box
        sx={{
          p: 2,
          bgcolor: "transparent",
          gap: 2,
        }}
      >
        <Item
          key="1"
          variant="outlined"
          sx={{ height: "fit-content", mt: "156px", py: 2 }}
        >
          <div>
            <AutoAwesomeTwoToneIcon sx={{ fontSize: 176 }} color="info" />
            <Typography align="center" variant="body1">
              {data.text}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{ minWidth: "191px" }}
            >
              {data.buttonCreateProject}
            </Button>
          </div>
        </Item>
      </Box>
    </Container>
  );
};

export default NewProject;
