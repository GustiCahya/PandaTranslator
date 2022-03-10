import React from "react";
import {
  Button,
  Typography,
  Container,
  TextField,
  Paper,
  Zoom,
} from "@mui/material";

const styles = {
  field: {
    my: 2,
    display: "block",
  },
};

export default function FindIndex() {
  // states
  const [arrNums, setArrNums] = React.useState([]);
  const nums = React.useMemo(() => {
    return arrNums.join(" ");
  }, [arrNums]);
  const [arrAbc, setArrAbc] = React.useState([]);
  const abc = React.useMemo(() => {
    return arrAbc.join("");
  }, [arrAbc]);
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
          Alphabets ={">"} Index
        </Typography>
        <TextField
          sx={styles.field}
          name="words"
          label="Alphabets"
          variant="outlined"
          fullWidth
          multiline
          onChange={(e) => {
            const alpha = Array.from(Array(26)).map((e, i) => i + 65);
            const alphabets = alpha.map((x) => String.fromCharCode(x));
            const value = e.target.value;
            if (/^[a-zA-Z\s]*$/i.test(value)) {
              const arrValue = value.split("");
              const arrItems = arrValue.map((item) => {
                if (item === " ") {
                  return "  ";
                }
                const idx = alphabets.findIndex((val) =>
                  new RegExp(`^${val}$`, "gi").test(item)
                );
                const num = +idx + 1;
                if (num > 0) {
                  return num;
                }
                return "";
              });
              setArrNums(arrItems);
            }
          }}
        />
        <Zoom in={nums}>
          <Typography
            sx={{ fontWeight: "bold", mt: 2, mx: 1, textAlign: "left" }}
          >
            {nums}
          </Typography>
        </Zoom>
      </Paper>
      <Paper sx={{ p: 2, my: 3, borderRadius: 2 }}>
        <Typography
          sx={{ mt: 1, mb: 3 }}
          variant="h6"
          color="wordsSecondary"
          component="h2"
          gutterBottom
        >
          Index ={">"} Alphabets
        </Typography>
        <TextField
          sx={styles.field}
          name="words"
          label="Index"
          variant="outlined"
          fullWidth
          multiline
          onChange={(e) => {
            const alpha = Array.from(Array(26)).map((e, i) => i + 65);
            const alphabets = alpha.map((x) => String.fromCharCode(x));
            const value = e.target.value;
            if (/^[\d\sㅤ]*$/i.test(value)) {
              const arrValue = value.split(" ");
              const arrItems = arrValue.map((item) => {
<<<<<<< HEAD
                if (item === "" || item === "ㅤ") {
                  return "ㅤ";
=======
                if (item === "") {
                  return "  ";
>>>>>>> 11bb38dc9a68cadf601ba3fe63fa64042267d908
                }
                const val = alphabets.find((_, idx) =>{
                  const num = item > 26 ? item % 26 : item;
                  return new RegExp(`^${(idx+1)}$`, "gi").test(num)
                }
                );
                return val;
              });
              setArrAbc(arrItems);
            }
          }}
        />
        <Zoom in={abc}>
          <Typography
            sx={{ fontWeight: "bold", mt: 2, mx: 1, textAlign: "left" }}
          >
            {abc}
          </Typography>
        </Zoom>
      </Paper>
    </Container>
  );
}
