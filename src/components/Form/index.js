import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import PhoneTextField from "../PhoneTextField";

export default function Form({ type1, type2, id, module, student }) {
  const navigate = useNavigate();

  const [subject, setSubject] = useState(module ? module.subject : "");
  const [lecturer, setLecturer] = useState(module ? module.lecturer : "");
  const [desc, setDesc] = useState(module ? module.desc : "");

  const [firstName, setFirstName] = useState(student ? student.firstName : "");
  const [lastName, setLastName] = useState(student ? student.lastName : "");
  const [email, setEmail] = useState(student ? student.email : "");
  const [phone, setPhone] = useState(student ? student.phone : "");
  const [ic, setIc] = useState(student ? student.ic : "");
  const [dob, setDob] = useState(student ? student.dob : "2000-01-01");
  const [add1, setAdd1] = useState(student ? student.add1 : "");
  const [add2, setAdd2] = useState(student ? student.add2 : "");
  const [add3, setAdd3] = useState(student ? student.add3 : "");
  const [eFN, setEFN] = useState(student ? student.eFN : "");
  const [eLN, setELN] = useState(student ? student.eLN : "");
  const [eRelation, setERelation] = useState(student ? student.eRelation : "");
  const [ePhone, setEPhone] = useState(student ? student.ePhone : "");

  const formSubmit = () => {
    // validation
    let error = "";
    if (type1 === "module" && subject === "") {
      error = "Subject is required.";
    }
    if (type1 === "student" && (firstName === "" || lastName === "")) {
      error = "First and last names are required.";
    }
    if (error !== "") {
      alert(error);
    } else {
      // module operations
      if (type1 === "module") {
        let modules = JSON.parse(localStorage.getItem("modules"));

        if (type2 === "add") {
          if (!modules) modules = [];
          modules.push({
            id: nanoid(),
            subject,
            lecturer,
            desc,
          });
          localStorage.setItem("modules", JSON.stringify(modules));
          navigate("/modules");
        }

        if (type2 === "edit") {
          const modules2 = modules.map((m) => {
            if (m.id === id) {
              return {
                ...m,
                subject,
                lecturer,
                desc,
              };
            }
            return m;
          });
          localStorage.setItem("modules", JSON.stringify(modules2));
          navigate(`/modules/${id}`);
        }
      }

      // student operations
      if (type1 === "student") {
        let students = JSON.parse(localStorage.getItem("students"));

        if (type2 === "add") {
          if (!students) students = [];
          students.push({
            id: nanoid(),
            firstName,
            lastName,
            email,
            phone,
            ic,
            dob,
            add1,
            add2,
            add3,
            eFN,
            eLN,
            eRelation,
            ePhone,
          });
          localStorage.setItem("students", JSON.stringify(students));
          navigate("/students");
        }

        if (type2 === "edit") {
          const students2 = students.map((s) => {
            if (s.id === id) {
              return {
                ...s,
                firstName,
                lastName,
                email,
                phone,
                ic,
                dob,
                add1,
                add2,
                add3,
                eFN,
                eLN,
                eRelation,
                ePhone,
              };
            }
            return s;
          });
          localStorage.setItem("students", JSON.stringify(students2));
          navigate(`/students/${id}`);
        }
      }
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {type1 === "module" ? (
            <>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  label="Subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Lecturer"
                  value={lecturer}
                  onChange={(e) => {
                    setLecturer(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={7}
                  label="Description"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </Grid>
            </>
          ) : (
            // type1 === "student" ?
            <>
              <Grid item xs={12}>
                <Typography variant="body1">Student</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  label="First name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  label="Last name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Email address"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <PhoneTextField
                  // fullWidth
                  // label="Phone number"
                  // type="tel"
                  value={phone}
                  onChange={(e) => {
                    // console.log(e);
                    setPhone(e);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="NRIC number"
                  type="number"
                  value={ic}
                  onChange={(e) => {
                    setIc(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Date of birth"
                  type="date"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address line 1"
                  value={add1}
                  onChange={(e) => {
                    setAdd1(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address line 2"
                  value={add2}
                  onChange={(e) => {
                    setAdd2(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address line 3"
                  value={add3}
                  onChange={(e) => {
                    setAdd3(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1">Emergency Contact</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="First name"
                  value={eFN}
                  onChange={(e) => {
                    setEFN(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Last name"
                  value={eLN}
                  onChange={(e) => {
                    setELN(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Relationship"
                  value={eRelation}
                  onChange={(e) => {
                    setERelation(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <PhoneTextField
                  // fullWidth
                  // label="Phone number"
                  // type="tel"
                  value={ePhone}
                  onChange={(e) => {
                    // console.log(e);
                    setEPhone(e);
                  }}
                />
              </Grid>
            </>
          )}
        </Grid>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2.5, mb: -0.5 }}
          onClick={formSubmit}
        >
          {type2 === "add"
            ? "Create"
            : // type2 === "edit" ?
              "Update"}
        </Button>
      </CardContent>
    </Card>
  );
}
