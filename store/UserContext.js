import React from "react";

const UserContext = React.createContext({
  user: false,
  setUser: (user) => {},
});

export default UserContext;
