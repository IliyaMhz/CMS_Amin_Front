import { renewAccessToken } from "./../../utils/date-helper.utils";
import {
  UserManagerSettings,
  UserManager,
  WebStorageStateStore,
} from "oidc-client";

let config: UserManagerSettings = {};

// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
//   config = {
//     // the URL of our identity server
//     authority: "https://sabak-sso.iran.liara.run/",
//     // this ID maps to the client ID in the identity client configuration
//     client_id: "demo_admin.cms.sabakorg.ir",
//     // URL to redirect to after login
//     redirect_uri: "https://localhost:6001/signin-oidc",
//     response_type: "code",
//     // the scopes or resources we would like access to
//     scope: "openid profile api1 role offline_access",
//     // URL to redirect to after logout
//     post_logout_redirect_uri: "https://localhost:6001/Register/",
//     //silent_redirect_uri: window.location.pathname,
//     //automaticSilentRenew: true,
//     userStore: new WebStorageStateStore({ store: localStorage }),
//   };
// } else {
//   config = {
//     // the URL of our identity server
//     authority: "https://sabak-sso.iran.liara.run/",
//     // this ID maps to the client ID in the identity client configuration
//     client_id: "admin.cms.sabakorg.ir",
//     // URL to redirect to after login
//     redirect_uri: "https://admin.cms.sabakorg.ir/signin-oidc",
//     response_type: "code",
//     // the scopes or resources we would like access to
//     scope: "openid profile api1 role offline_access",
//     // URL to redirect to after logout
//     post_logout_redirect_uri: "https://admin.cms.sabakorg.ir/Register/",
//     //silent_redirect_uri: window.location.pathname,
//     //automaticSilentRenew: true,
//     userStore: new WebStorageStateStore({ store: localStorage }),
//   };
// }

// config = {
//   // the URL of our identity server
//   authority: "https://sso.sabakorg.ir/",
//   // this ID maps to the client ID in the identity client configuration
//   client_id: "Sabakorg",
//   // URL to redirect to after login
//   redirect_uri: "https://sabakorg.ir/signin-oidc",
//   response_type: "code",
//   // the scopes or resources we would like access to
//   scope: "openid profile api1 role offline_access",
//   // URL to redirect to after logout
//   post_logout_redirect_uri: "https://sabakorg.ir/Register/",
//   //silent_redirect_uri: window.location.pathname,
//   //automaticSilentRenew: true,
// };

//cms config

// config = {
//   // the URL of our identity server
//   authority: "https://sabak-sso.iran.liara.run/",
//   // this ID maps to the client ID in the identity client configuration
//   client_id: "admin.cms.sabakorg.ir",
//   // URL to redirect to after login
//   redirect_uri: "https://admin.cms.sabakorg.ir/signin-oidc",
//   response_type: "code",
//   // the scopes or resources we would like access to
//   scope: "openid profile api1 role offline_access",
//   // URL to redirect to after logout
//   post_logout_redirect_uri: "https://admin.cms.sabakorg.ir/Register/",
//   //silent_redirect_uri: window.location.pathname,
//   //automaticSilentRenew: true,
//   userStore: new WebStorageStateStore({ store: localStorage }),
// };

//local cofig

config = {
  // the URL of our identity server
  authority: "https://sso.cms.danag.ir/",
  // this ID maps to the client ID in the identity client configuration
  client_id: "admin.cms.danag.ir",
  // URL to redirect to after login
  redirect_uri: "https://admin.cms.danag.ir/signin-oidc",
  response_type: "code",
  // the scopes or resources we would like access to
  scope: "openid profile api1 role offline_access",
  // URL to redirect to after logout
  post_logout_redirect_uri: "https://admin.cms.danag.ir/Register/",
  //silent_redirect_uri: window.location.pathname,
  //automaticSilentRenew: true,
  userStore: new WebStorageStateStore({ store: localStorage }),
};
const userManager = new UserManager(config);

userManager.events.addAccessTokenExpiring(async function () {
  console.log("Access token expiring...");
  await renewAccessToken();
});

// initialise!
export { userManager };
