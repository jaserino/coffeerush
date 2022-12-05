import React from 'react';

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [about, setAbout] = React.useState('');
  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        about,
        setAbout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
