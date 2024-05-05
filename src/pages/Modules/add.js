import { Container, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import Form from "../../components/Form";

export default function ModuleAdd() {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Typography variant="h5" gutterBottom>
          Add Module
        </Typography>
        <Form type1="module" type2="add" />
      </Container>
    </>
  );
}
