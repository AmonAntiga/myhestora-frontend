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
    component: "",
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
  {
    type: "collapse",
    name: "Pages",
    key: "pages",
    icon: <Icon fontSize="medium">image</Icon>,
    collapse: [
      {
        name: "Profile",
        key: "profile",
        collapse: [
          {
            name: "Profile Overview",
            key: "profile-overview",
            route: "/pages/profile/profile-overview",
            component: "",
          },
          {
            name: "All Projects",
            key: "all-projects",
            route: "/pages/profile/all-projects",
            component: "",
          },
        ],
      },
      {
        name: "Users",
        key: "users",
        collapse: [
          {
            name: "New User",
            key: "new-user",
            route: "/pages/users/new-user",
            component: "",
          },
        ],
      },
      {
        name: "Account",
        key: "account",
        collapse: [
          {
            name: "Settings",
            key: "settings",
            route: "/pages/account/settings",
            component: "",
          },
          {
            name: "Billing",
            key: "billing",
            route: "/pages/account/billing",
            component: "",
          },
          {
            name: "Invoice",
            key: "invoice",
            route: "/pages/account/invoice",
            component: "",
          },
        ],
      },
      {
        name: "Projects",
        key: "projects",
        collapse: [
          {
            name: "Timeline",
            key: "timeline",
            route: "/pages/projects/timeline",
            component: "",
          },
        ],
      },
      {
        name: "Pricing Page",
        key: "pricing-page",
        route: "/pages/pricing-page",
        component: "",
      },
    ],
  },
  {
    type: "collapse",
    name: "Applications",
    key: "applications",
    icon: <Icon fontSize="medium">apps</Icon>,
    collapse: [
      {
        name: "Kanban",
        key: "kanban",
        route: "/applications/kanban",
        component: "",
      },
      {
        name: "Wizard",
        key: "wizard",
        route: "/applications/wizard",
        component: "",
      },
      {
        name: "Data Tables",
        key: "data-tables",
        route: "/applications/data-tables",
        component: "",
      },
    ],
  },
  {
    type: "collapse",
    name: "Ecommerce",
    key: "ecommerce",
    icon: <Icon fontSize="medium">shopping_basket</Icon>,
    collapse: [
      {
        name: "Products",
        key: "products",
        collapse: [
          {
            name: "New Product",
            key: "new-product",
            route: "/ecommerce/products/new-product",
            component: "",
          },
          {
            name: "Edit Product",
            key: "edit-product",
            route: "/ecommerce/products/edit-product",
            component: "",
          },
          {
            name: "Product Page",
            key: "product-page",
            route: "/ecommerce/products/product-page",
            component: "",
          },
        ],
      },
      {
        name: "Orders",
        key: "orders",
        collapse: [
          {
            name: "Order List",
            key: "order-list",
            route: "/ecommerce/orders/order-list",
            component: "",
          },
          {
            name: "Order Details",
            key: "order-details",
            route: "/ecommerce/orders/order-details",
            component: "",
          },
        ],
      },
    ],
  },
  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    icon: <Icon fontSize="medium">content_paste</Icon>,
    collapse: [
      {
        name: "Sign In",
        key: "sign-in",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/sign-in/basic",
            component: "",
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-in/cover",
            component: "",
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/sign-in/illustration",
            component: "",
          },
        ],
      },
      {
        name: "Sign Up",
        key: "sign-up",
        collapse: [
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-up/cover",
            component: "",
          },
        ],
      },
      {
        name: "Reset Password",
        key: "reset-password",
        collapse: [
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/reset-password/cover",
            component: "",
          },
        ],
      },
    ],
  },
  { type: "divider", key: "divider-1" },
  { type: "title", title: "Docs", key: "title-docs" },
  {
    type: "collapse",
    name: "Basic",
    key: "basic",
    icon: <Icon fontSize="medium">upcoming</Icon>,
    collapse: [
      {
        name: "Getting Started",
        key: "getting-started",
        collapse: [
          {
            name: "Overview",
            key: "overview",
            href: "",
          },
          {
            name: "License",
            key: "license",
            href: "",
          },
          {
            name: "Quick Start",
            key: "quick-start",
            href: "",
          },
          {
            name: "Build Tools",
            key: "build-tools",
            href: "",
          },
        ],
      },
      {
        name: "Foundation",
        key: "foundation",
        collapse: [
          {
            name: "Colors",
            key: "colors",
            href: "",
          },
          {
            name: "Grid",
            key: "grid",
            href: "",
          },
        ],
      },
    ],
  },
  {
    type: "collapse",
    name: "Components",
    key: "components",
    icon: <Icon fontSize="medium">view_in_ar</Icon>,
    collapse: [
      {
        name: "Alerts",
        key: "alerts",
        href: "",
      },
      {
        name: "Avatar",
        key: "avatar",
        href: "",
      },
    ],
  },
  {
    type: "collapse",
    name: "Change Log",
    key: "changelog",
    href: "",
    icon: <Icon fontSize="medium">receipt_long</Icon>,
    noCollapse: true,
  },
];

export default routes;
