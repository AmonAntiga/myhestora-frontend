// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 PRO React components
import MKTypography from "components/MDTypography";

// Images
import logoCT from "assets/images/pages/auth/footer/hestora-logo-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Hestora",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "",
    },
    {
      icon: <TwitterIcon />,
      link: "",
    },
    {
      icon: <GitHubIcon />,
      link: "",
    },
    {
      icon: <YouTubeIcon />,
      link: "",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", link: "" },
        { name: "what is hestora", link: "" },
        { name: "blog", link: "" },
        { name: "careers", link: "" },
      ],
    },
    {
      name: "services",
      items: [
        { name: "EternaVault", link: "" },
        { name: "SocialMantle", link: "" },
        { name: "AegisFunds", link: "" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "hestora security", link: "" },
        { name: "knowledge center", link: "" },
        { name: "partnership", link: "" },
        { name: "contact us", link: "" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "privacy policy", link: "" },
        { name: "terms & conditions", link: "" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Hestora
    </MKTypography>
  ),
};
