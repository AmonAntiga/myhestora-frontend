/**
=========================================================
* Material Dashboard 2 PRO React - v2.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

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
      </MDBox>
    </MDBox>
  );
}

// typechecking props for Preferences
Preferences.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Preferences;
