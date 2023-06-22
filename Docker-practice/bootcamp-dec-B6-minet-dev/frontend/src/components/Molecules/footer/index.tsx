import Button from "../../Atoms/Button";
import { Dropdown } from "../../Atoms/dropdown";
import TypographyMinet from "../../Atoms/TypographyMinet";
import { Stack} from "@mui/material";
const items = ["English", "Hindi", "Telugu"];
interface FooterProps {
    mock: (arg0:string)=>void
}
export const Footer = (props:FooterProps) => {
  return (
      <footer>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          sx={{
            backgroundColor: "transparent",
            borderTop: "1px solid",
            borderColor: "grey.100",
            maxHeight: "90px",
            width: "auto",
            padding: "0px 24px",
          }}
        >
          <Stack direction="row" gap="24px" sx={{ padding: "34px 0px" }}>
            <TypographyMinet
              variant="body2"
              sx={{ fontweight: "400", color: "primary.main" }}
            >
              Dashboard
            </TypographyMinet>
            <TypographyMinet
              variant="body2"
              sx={{ fontweight: "400", color: "primary.main" }}
            >
              Careers
            </TypographyMinet>
            <TypographyMinet
              variant="body2"
              sx={{ fontweight: "400", color: "primary.main" }}
            >
              Legal & Privacy
            </TypographyMinet>
            <TypographyMinet
              variant="body2"
              sx={{ fontweight: "400", color: "text.disabled" }}
            >
              © 2021 Minet
            </TypographyMinet>
          </Stack>
          <Stack direction="row" gap={"1rem"} sx={{ padding: "24px 0px" }} justifyContent="space-between">
            <Dropdown
              mock={props.mock}
              Menu={items}
              sx={{
                width: "170px",
                height: "42px",
                color: "text.disabled",
                fontWeight: "400",
              }}
            ></Dropdown>
            <Button
              variant="outlined"
              sx={{ padding: "0px 16px", width: "114px", height: "42px" }}
            >
              NEED HELP
            </Button>
          </Stack>
        </Stack>
      </footer>
  );
};
