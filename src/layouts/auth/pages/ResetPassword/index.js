// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

import PageLayout from "layouts/auth/layout";

// Images
import bgImage from "assets/images/pages/auth/resetpassword/backgtound.jpeg";

function Cover() {
  return (
    <PageLayout>
      <MDBox
        position="absolute"
        width="100%"
        minHeight="80vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            bgImage &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MDBox px={1} width="100%" height="80vh" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MDBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="success"
                mx={2}
                mt={-3}
                py={2}
                mb={1}
                textAlign="center"
              >
                <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
                  Reset Password
                </MDTypography>
                <MDTypography display="block" variant="button" color="white" my={1}>
                  You will receive an e-mail in maximum 60 seconds
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form">
                  <MDBox mb={4}>
                    <MDInput type="email" label="Email" variant="standard" fullWidth />
                  </MDBox>
                  <MDBox mt={6} mb={1}>
                    <MDButton variant="gradient" color="info" fullWidth>
                      reset
                    </MDButton>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </PageLayout>
  );
}

export default Cover;
