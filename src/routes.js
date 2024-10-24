/** 
  All of the routes for the Material Dashboard 2 PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 PRO React layouts
import Dashboard from "layouts/dashboard/pages/Dashboard";
import Login from "layouts/auth/pages/Login";
import Register from "layouts/auth/pages/Register";
import ResetPassword from "layouts/auth/pages/ResetPassword";

// Dashboard components
import MDAvatar from "components/MDAvatar";

// @mui icons
import Icon from "@mui/material/Icon";

// Images
import profilePicture from "assets/images/pages/account/avatar.jpg";

const routes = [
  {
    type: "collapse",
    name: "User Name",
    key: "user-name",
    icon: <MDAvatar src={profilePicture} alt="User Name" size="sm" />,
    collapse: [
      {
        name: "My Profile",
        key: "my-profile",
        route: "/pages/profile/profile-overview",
        component: "",
      },
      {
        name: "Settings",
        key: "profile-settings",
        route: "/pages/account/settings",
        component: "",
      },
      {
        name: "Logout",
        key: "logout",
        route: "/authentication/sign-in/basic",
        component: "",
      },
    ],
  },
  { type: "divider", key: "divider-0" },
  {
    type: "collapse",
    noCollapse: true,
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    component: <Dashboard />,
    icon: <Icon fontSize="medium">dashboard</Icon>,
  },
  { type: "divider", key: "divider-0" },
  { type: "title", title: "Services", key: "title-services" },
  {
    type: "collapse",
    name: "EternaVault",
    key: "eternavault",
    icon: <Icon fontSize="medium">storage</Icon>,
    collapse: [
      {
        name: "Dashboard",
        key: "eternavault-dashboard",
        route: "/services/eternavault/dashboard",
        component: "",
      },
      {
        name: "Vault",
        key: "eternavault-vault",
        route: "/services/eternavault/vault",
        component: "",
      },
      {
        name: "Heirs",
        key: "eternavault-heirs",
        route: "/services/eternavault/heirs",
        component: "",
      },
    ],
  },
  {
    type: "collapse",
    name: "SocialMantle",
    key: "socialmantle",
    icon: <Icon fontSize="medium">group</Icon>,
    collapse: [
      {
        name: "Dashboard",
        key: "socialmantle-dashboard",
        route: "/services/socialmantle/dashboard",
        component: "",
      },
      {
        name: "Networks",
        key: "socialmantle-networks",
        route: "/services/socialmantle/networks",
        component: "",
      },
      {
        name: "Heirs",
        key: "socialmantle-heirs",
        route: "/services/socialmantle/heirs",
        component: "",
      },
    ],
  },
  {
    type: "collapse",
    name: "AegisFunds",
    key: "aegisfunds",
    icon: <Icon fontSize="medium">account_balance</Icon>,
    collapse: [
      {
        name: "Dashboard",
        key: "aegisfunds-dashboard",
        route: "/services/aegisfunds/dashboard",
        component: "",
      },
      {
        name: "Funds",
        key: "aegisfunds-funds",
        route: "/services/aegisfunds/funds",
        component: "",
      },
      {
        name: "Heirs",
        key: "aegisfunds-heirs",
        route: "/services/aegisfunds/heirs",
        component: "",
      },
    ],
  },
  { type: "divider", key: "divider-1" },
  { type: "title", title: "Support", key: "title-support" },
  {
    type: "collapse",
    name: "Guides",
    key: "guide-doc",
    icon: <Icon fontSize="medium">description</Icon>,
    collapse: [
      {
        name: "Getting Started",
        key: "getting-started-doc",
        collapse: [
          {
            name: "Overview",
            key: "overview-doc",
            component: "",
          },
          {
            name: "License",
            key: "license-doc",
            component: "",
          },
          {
            name: "Quick Start",
            key: "quick-start-doc",
            component: "",
          },
        ],
      },
      {
        name: "Services",
        key: "services-doc",
        collapse: [
          {
            name: "EternaVault",
            key: "eternavault-doc",
            component: "",
          },
          {
            name: "SocialMantle",
            key: "socialmantle-doc",
            component: "",
          },
          {
            name: "AegisFunds",
            key: "aegisfunds-doc",
            component: "",
          },
        ],
      },
    ],
  },
  {
    type: "collapse",
    noCollapse: true,
    name: "Change Log",
    key: "changelog",
    route: "/changelog",
    component: "",
    icon: <Icon fontSize="medium">receipt_long</Icon>,
  },
  {
    type: "collapse",
    noCollapse: true,
    name: "Feedback",
    key: "feedback",
    route: "/feedback",
    component: "",
    icon: <Icon fontSize="medium">feedback</Icon>,
  },
  { type: "divider", key: "divider-1" },
  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    icon: <Icon fontSize="medium">content_paste</Icon>,
    collapse: [
      {
        name: "Login",
        key: "login",
        route: "/login",
        component: <Login />,
      },
      {
        name: "Register",
        key: "register",
        route: "/register",
        component: <Register />,
      },
      {
        name: "Reset Password",
        key: "reset-password",
        route: "/reset-password",
        component: <ResetPassword />,
      },
    ],
  },
];

export default routes;
