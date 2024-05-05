import { useState } from "react";
import { Container, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";

export default function Attendance() {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);

  return (
    <>
      <Navbar />
      <Container>
        <Typography>Attendance</Typography>
      </Container>
    </>
  );
}
