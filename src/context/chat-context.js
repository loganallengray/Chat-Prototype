import React from "react";

const ChatContext = React.createContext();

// Chatcontext = array of chat objects
// Chatobject = (id, name, messages)
// Message = (id, content, userSent)