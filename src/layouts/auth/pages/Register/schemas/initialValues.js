import checkout from "layouts/auth/pages/Register/schemas/form";

const {
  formField: {
    firstName,
    lastName,
    email,
    password,
    repeatPassword,
    address1,
    address2,
    phone,
    city,
    country,
    state,
    zip,
    language,
  },
} = checkout;

const initialValues = {
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [password.name]: "",
  [repeatPassword.name]: "",
  [address1.name]: "",
  [address2.name]: "",
  [phone.name]: "",
  [city.name]: "",
  [country.name]: "",
  [zip.name]: "",
  [state.name]: "",
  [language.name]: "",
};

export default initialValues;
