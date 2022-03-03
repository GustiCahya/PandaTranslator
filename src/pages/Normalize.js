import React from "react";
import {
  Button,
  Typography,
  Container,
  TextField,
  Paper,
  Zoom,
} from "@mui/material";
import normalize from "../utils/normalize";

const styles = {
  field: {
    my: 2,
    display: "block",
  },
};

export default function Normalize() {
  // states
  const initialFormValues = { letter: "", letterPlacement: "", words: "" };
  const [formValues, setFormValues] = React.useState(initialFormValues);
  const [formErrors, setFormErrors] = React.useState({});
  const [result, setResult] = React.useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const { letter, letterPlacement, words } = formValues;
      const text = normalize(letter, letterPlacement, words);
      setResult(text);
    }
  };
  const validate = (value) => {
    const errors = {};
    if (!value.letter) {
      errors.letter = "Letter is required!";
    } else if (!/^[a-zA-Z]{1}$/i.test(value.letter)) {
      errors.letter = "Please only input one alphabet!";
    }
    if (!value.letterPlacement) {
      errors.letterPlacement = "Letter Placement is required!";
    } else if (!(value.letterPlacement > 0 && value.letterPlacement <= 26)) {
      errors.letterPlacement = "Letter Placement Must Between 1 to 26";
    }
    if (!value.words) {
      errors.words = "Text is required!";
    } else if (!/^[a-zA-Z\s]*$/i.test(value.words)) {
      errors.words = "Please input alphabets only!";
    }
    return errors;
  };
  return (
    <Container>
      <Paper sx={{ p: 2, borderRadius: 2 }}>
        <Typography
          sx={{ mt: 1, mb: 3 }}
          variant="h6"
          color="wordsSecondary"
          component="h2"
          gutterBottom
        >
          Normalize Panda Language
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            sx={styles.field}
            name="letter"
            label="Letter"
            variant="outlined"
            fullWidth
            required
            value={formValues.letter}
            error={formErrors.letter}
            helperText={formErrors.letter}
            onChange={handleChange}
          />
          <TextField
            sx={styles.field}
            type="number"
            name="letterPlacement"
            label="Letter Placement"
            variant="outlined"
            fullWidth
            required
            value={formValues.letterPlacement}
            error={formErrors.letterPlacement}
            helperText={formErrors.letterPlacement}
            onChange={handleChange}
          />
          <TextField
            sx={styles.field}
            name="words"
            label="Text"
            variant="outlined"
            fullWidth
            required
            value={formValues.words}
            error={formErrors.words}
            helperText={formErrors.words}
            onChange={handleChange}
          />
          <Button
            sx={{ display: "block", mx: "auto", mt: 3 }}
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </form>
        <Zoom in={result}>
          <Typography
            sx={{ fontWeight: "bold", my: 4, textAlign: "center" }}
            variant="h4"
          >
            {result}
          </Typography>
        </Zoom>
      </Paper>
    </Container>
  );
}
