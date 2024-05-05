import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import DetailsCard from "../../components/DetailsCard";
import NotFound from "../../components/NotFound";

export default function StudentDetails() {
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
        <Container>
          <Typography variant="h5" gutterBottom>
            Student Details
          </Typography>
          <DetailsCard type="details" student={student} />
        </Container>
      )}
    </>
  );
}
