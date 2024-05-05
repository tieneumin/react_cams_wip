import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import Form from "../../components/Form";
import NotFound from "../../components/NotFound";

export default function StudentEdit() {
  const { id } = useParams();
  let students = JSON.parse(localStorage.getItem("students"));
  if (!students) students = [];
  const student = students.find((m) => m.id === id);

  return (
    <>
      <Navbar />
      {student === undefined ? (
        <NotFound type="student" />
      ) : (
        <Container maxWidth="md">
          <Typography variant="h5" gutterBottom>
            Edit Student
          </Typography>
          <Form type1="student" type2="edit" id={id} student={student} />
        </Container>
      )}
    </>
  );
}
