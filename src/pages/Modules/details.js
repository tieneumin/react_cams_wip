import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import DetailsCard from "../../components/DetailsCard";
import NotFound from "../../components/NotFound";

export default function ModuleDetails() {
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
        <Container>
          <Typography variant="h5" gutterBottom>
            Module Details
          </Typography>
          <DetailsCard type="details" module={module} />
        </Container>
      )}
    </>
  );
}
