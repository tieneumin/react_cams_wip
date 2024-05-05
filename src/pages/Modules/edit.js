import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import Form from "../../components/Form";
import NotFound from "../../components/NotFound";

export default function ModuleEdit() {
  const { id } = useParams();
  let modules = JSON.parse(localStorage.getItem("modules"));
  if (!modules) modules = [];
  const module = modules.find((m) => m.id === id);

  return (
    <>
      <Navbar />
      {module === undefined ? (
        <NotFound type="module" />
      ) : (
        <Container maxWidth="md">
          <Typography variant="h5" gutterBottom>
            Edit Module
          </Typography>
          <Form type1="module" type2="edit" id={id} module={module} />
        </Container>
      )}
    </>
  );
}
