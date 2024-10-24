// prop-type is a library for typechecking of props
import PropTypes from "prop-types";
import * as React from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// NewUser page components
import FormField from "layouts/auth/pages/Register/components/FormField";

function Address({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { address1, address2, phone, city, country, state, zip } = formField;
  const {
    address1: address1V,
    address2: address2V,
    phone: phoneV,
    city: cityV,
    country: countryV,
    state: stateV,
    zip: zipV,
  } = values;

  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        Address
      </MDTypography>
      <MDBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={address1.type}
              label={address1.label}
              name={address1.name}
              value={address1V}
              placeholder={address1.placeholder}
              error={errors.address1 && touched.address1}
              success={address1V.length > 0 && !errors.address1}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={address2.type}
              label={address2.label}
              name={address2.name}
              value={address2V}
              placeholder={address2.placeholder}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={phone.type}
              label={phone.label}
              name={phone.name}
              value={phoneV}
              placeholder={phone.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={city.type}
              label={city.label}
              name={city.name}
              value={cityV}
              placeholder={city.placeholder}
              error={errors.city && touched.city}
              success={cityV.length > 0 && !errors.city}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <FormField
              type={country.type}
              label={country.label}
              name={country.name}
              value={countryV}
              placeholder={country.placeholder}
              error={errors.country && touched.country}
              success={countryV.length > 0 && !errors.country}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={state.type}
              label={state.label}
              name={state.name}
              value={stateV}
              placeholder={state.placeholder}
              error={errors.state && touched.state}
              success={cityV.length > 0 && !errors.state}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormField
              type={zip.type}
              label={zip.label}
              name={zip.name}
              value={zipV}
              placeholder={zip.placeholder}
              error={errors.zip && touched.zip}
              success={zipV.length > 0 && !errors.zip}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for Address
Address.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Address;
