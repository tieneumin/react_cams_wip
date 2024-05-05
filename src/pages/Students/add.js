import { Container, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import Form from "../../components/Form";

export default function StudentAdd() {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Typography variant="h5" gutterBottom>
          Add Student
        </Typography>
        <Form type1="student" type2="add" />
      </Container>
    </>
  );
}
