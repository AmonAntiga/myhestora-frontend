import * as Yup from "yup";
import checkout from "layouts/auth/pages/Register/schemas/form";

const {
  formField: {
    firstName,
    lastName,
    email,
    repeatEmail,
    password,
    repeatPassword,
    address1,
    city,
    country,
    zip,
    language,
  },
} = checkout;

const validations = [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(firstName.errorMsg),
    [lastName.name]: Yup.string().required(lastName.errorMsg),
    [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
    [repeatEmail.name]: Yup.string()
      .required(repeatEmail.errorMsg)
      .oneOf([Yup.ref("email"), null], repeatEmail.invalidMsg),
    [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
    [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
    [repeatPassword.name]: Yup.string()
      .required(repeatPassword.errorMsg)
      .oneOf([Yup.ref("password"), null], repeatPassword.invalidMsg),
  }),
  Yup.object().shape({
    [address1.name]: Yup.string().required(address1.errorMsg),
    [city.name]: Yup.string().required(city.errorMsg),
    [country.name]: Yup.string().required(country.errorMsg),
    //[zip.name]: Yup.string().required(zip.errorMsg).min(6, zip.invalidMsg),
  }),
  Yup.object().shape({
    //[language.name]: Yup.string().required(language.errorMsg),
  }),
];

export default validations;
