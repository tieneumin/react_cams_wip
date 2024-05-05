import { Card, Container, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
      </Container>
    </>
  );
}
