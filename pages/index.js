import * as React from "react";
import {
  Typography,
  Button,
  TextField,
  Box,
  Paper,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  BpCheckbox,
} from "@mui/material";

const Home = () => {
    const [age, setAge] = React.useState("");
    const [value, setValue] = React.useState("female");
    const [checked, setChecked] = React.useState(true);
 
    const handleChecked = (event) => {
         setChecked(event.target.checked);
       };
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    const handleAgeChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <Box sx={{ maxWidth: 500 }}>
      <Paper
        elevation={1}
        sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: 24 }}>
          Inscreva-se em nossa newsletter
        </Typography>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            sx={{ width: 1 }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: 1 }}
          />
        </Grid>

        <FormControl xs={12} sx={{ width: 1 }} size="small">
          <InputLabel id="demo-select-small">Stack</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleAgeChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Front-end"}>Front-end</MenuItem>
            <MenuItem value={"Back-end"}>Back-end</MenuItem>
            <MenuItem value={"Fullstack"}>Fullstack</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <FormControlLabel
          control={<Checkbox />}
          label= "I want to receive newsletters"
        />

        <Button variant="contained" sx={{ width: 1 }}>
          Inscreva-se
        </Button>
      </Paper>
    </Box>
  );
};

export default Home;
