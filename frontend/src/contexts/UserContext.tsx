"use client";

import { LoggedUser } from "@/lib/types";
import { createContext } from "react";

export const UserContext = createContext<LoggedUser>({
  email: "Guest",
  image:
   "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
});

//  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiL1zL2R1W0aBbP-WvL6Tiv6KH660Weoh_ug&s",
