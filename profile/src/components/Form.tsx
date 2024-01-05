import { useContext, useState } from "react";
import { ProfileContext } from "../context/Profile";

const Form = () => {
  const profile = useContext(ProfileContext);
  const [newName, setNewName] = useState(profile.name);

  const handleChange = (e) => {
    setNewName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    profile.setName(newName);
  };

  return (
    <form>
      <input type="text" value={newName} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Form;
