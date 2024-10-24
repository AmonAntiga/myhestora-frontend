const form = {
  formId: "new-user-form",
  formField: {
    /* First Page */
    firstName: {
      name: "firstName",
      label: "First Name",
      type: "text",
      errorMsg: "First name is required.",
    },
    lastName: {
      name: "lastName",
      label: "Last Name",
      type: "text",
      errorMsg: "Last name is required.",
    },
    email: {
      name: "email",
      label: "Email Address",
      type: "email",
      errorMsg: "Email address is required.",
      invalidMsg: "Your email address is invalid",
    },
    repeatEmail: {
      name: "repeatEmail",
      label: "Repeat Email Address",
      type: "email",
      errorMsg: "Email address is required.",
      invalidMsg: "Your email doesn't match.",
    },
    password: {
      name: "password",
      label: "Password",
      type: "password",
      errorMsg: "Password is required.",
      invalidMsg: "Your password should be more than 6 characters.",
    },
    repeatPassword: {
      name: "repeatPassword",
      label: "Repeat Password",
      type: "password",
      errorMsg: "Password is required.",
      invalidMsg: "Your password doesn't match.",
    },
    /* Second Page */
    address1: {
      name: "address1",
      label: "Address 1",
      type: "text",
      errorMsg: "Address is required.",
    },
    address2: {
      name: "address2",
      label: "Address 2",
      type: "text",
    },
    phone: {
      name: "phone",
      label: "Phone Number",
      type: "text",
    },
    city: {
      name: "city",
      label: "City",
      type: "text",
      errorMsg: "City is required.",
    },
    country: {
      name: "country",
      label: "Country",
      type: "text",
      errorMsg: "Country is required.",
    },
    state: {
      name: "state",
      label: "State",
      type: "text",
      errorMsg: "State is required.",
      invalidMsg: "State is not valid",
    },
    zip: {
      name: "zip",
      label: "Zip",
      type: "number",
      errorMsg: "Zip is required.",
      invalidMsg: "Zipcode is not valie (e.g. 70000).",
    },
    /* Second Page */
    language: {
      name: "language",
      label: "Language",
      type: "text",
      errorMsg: "Language is required.",
    },
  },
};

export default form;
