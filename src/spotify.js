// import { useEffect } from "react";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const resdirectUri = "https://spotify-clone-app-d994c.web.app/";

const clientId = "2af1e24e7bcd46d0af8adf4df8a19170";

// scope -> used to give functionalities in app
// -> it gets the correct link from the api

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")

    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${resdirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// steps:-
//     1. click login button
//     2. redirect to spotify login page
//     3. redirect to home page once login;
