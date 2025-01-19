import React, { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <GlobalStateContext.Provider
      value={{
        selectedProjectId,
        setSelectedProjectId,
        selectedChat,
        setSelectedChat,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
