import { createStyles, Theme, Tab, withStyles } from "@material-ui/core";

interface StyledTabProps {
  label: string;
}
export const NavTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      textDecoration: "none",
      minWidth: 70,
      color: "gray",
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(3),

      "&:hover": {
        color: "white",
        opacity: 1,
      },
      "&$selected": {
        color: "white",
        fontWeight: theme.typography.fontWeightMedium,
      },
      "&:focus": {
        textDecoration: "none",
        color: "white",
      },
    },
    selected: {},
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);
