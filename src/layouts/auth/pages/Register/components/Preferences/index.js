// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// NewUser page components
import FormField from "layouts/auth/pages/Register/components/FormField";

function Preferences({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { language } = formField;
  const { language: languageV } = values;

  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        Preferences
      </MDTypography>
      <MDBox mt={1.625}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormField
              type={language.type}
              label={language.label}
              name={language.name}
              value={languageV}
              placeholder={language.placeholder}
              error={errors.language && touched.language}
              success={languageV.length > 0 && !errors.language}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Switch />
            <MDTypography
              variant="button"
              fontWeight="regular"
              color="text"
              sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
            >
              &nbsp;&nbsp;Marketing Offers
            </MDTypography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Switch />
            <MDTypography
              variant="button"
              fontWeight="regular"
              color="text"
              sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
            >
              &nbsp;&nbsp;Newsletters
            </MDTypography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Switch />
            <MDTypography
              variant="button"
              fontWeight="regular"
              color="text"
              sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
            >
              &nbsp;&nbsp;Push Notifications
            </MDTypography>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for Preferences
Preferences.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Preferences;
