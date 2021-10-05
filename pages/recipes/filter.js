import Layout from "@/components/Layout/Layout"

import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import RadioGroup from "@mui/material/RadioGroup"
import Radio from "@mui/material/Radio"
import Button from "@mui/material/Button"

export default function FilterPage() {
  return (
    <Layout>
      <h1>Filter Page</h1>
      <FormControl component="fieldset">
        <FormLabel component="legend">Sort By</FormLabel>
        <RadioGroup
          row
          aria-label="sort by"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Recom.."
            control={<Radio />}
            label="Recom.."
          />
          <FormControlLabel
            value="TopRated"
            control={<Radio />}
            label="Top Rated"
          />
          <FormControlLabel
            value="Fastest"
            control={<Radio />}
            label="Fastest"
          />
          <FormControlLabel
            value="Only ingr i have"
            control={<Radio />}
            label="Only ingr i have"
          />
        </RadioGroup>
        <FormLabel component="legend">Special prefs</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="top"
            control={<Checkbox />}
            label="Vegan"
            labelPlacement="top"
          />
          <FormControlLabel
            value="top"
            control={<Checkbox />}
            label="Vegetarian"
            labelPlacement="top"
          />
          <FormControlLabel
            value="top"
            control={<Checkbox />}
            label="Glutenfri"
            labelPlacement="top"
          />
          <FormControlLabel
            value="top"
            control={<Checkbox />}
            label="Laktosfri"
            labelPlacement="top"
          />
        </FormGroup>
        <FormLabel component="legend">Typ av recept</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="top"
            control={<Checkbox />}
            label="Huvudrätt"
            labelPlacement="top"
          />
          <FormControlLabel
            value="top"
            control={<Checkbox />}
            label="Efterrätt"
            labelPlacement="top"
          />
          <FormControlLabel
            value="top"
            control={<Checkbox />}
            label="Förrätt"
            labelPlacement="top"
          />
          <FormControlLabel
            value="top"
            control={<Checkbox />}
            label="Snacks"
            labelPlacement="top"
          />
        </FormGroup>
      </FormControl>
      <Button fullWidth variant="contained">
        Search
      </Button>
    </Layout>
  )
}
