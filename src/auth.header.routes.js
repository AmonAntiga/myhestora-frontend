// @mui material components
import Icon from "@mui/material/Icon";

const routes = [
  {
    name: "Company",
    icon: <Icon>business</Icon>,
    collapse: [
      {
        name: "About Us",
        link: "",
      },
      {
        name: "What is Hestora",
        link: "",
      },
      {
        name: "Blog",
        link: "",
      },
      {
        name: "Careers",
        link: "",
      },
    ],
  },
  {
    name: "Services",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "EternaVault",
        link: "",
      },
      {
        name: "SocialMantle",
        link: "",
      },
      {
        name: "AegisFunds",
        link: "",
      },
    ],
  },
  {
    name: "Pricing",
    icon: <Icon>money</Icon>,
    link: "",
  },
  {
    name: "Help & Support",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Hestora Security",
        link: "",
      },
      {
        name: "Knowledge Center",
        link: "",
      },
      {
        name: "Partnership",
        link: "",
      },
      {
        name: "Contact Us",
        link: "",
      },
      {
        name: "Privacy Policy",
        link: "",
      },
      {
        name: "Terms & Conditions",
        link: "",
      },
    ],
  },
];

export default routes;
