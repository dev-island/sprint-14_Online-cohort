import { createContext, useState, FC } from "react";

const initialState = {
  name: "Andrew",
  jobTitle: 'Senior Software Engineer',
  profilePhoto: 'https://avatars.githubusercontent.com/u/1024025?v=4',
  setName: (name) => {},
};

export const ProfileContext = createContext(initialState);

const ProfileProvider: FC = ({ children }) => {
  const [data, setData] = useState(initialState);

  const setName = (newName) => {
    setData((prevData) => {
      return {
        ...prevData,
        name: newName,
      };
    });
  }

  return (
    <ProfileContext.Provider value={{ ...data, setName }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
