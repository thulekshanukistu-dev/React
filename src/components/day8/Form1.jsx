import { useState } from "react";
export default function From1() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [data, setData] = useState('')

    const handleChange = (event) => {
        event.preventDefault();
        const data = {
            name: username,
            password: password,
            gender: gender

        }
        console.log('name' + data.name);
        setData(data)
    };
    return (
    <>
      <form onSubmit={handleChange}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />

        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(event) => setGender(event.target.value)}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(event) => setGender(event.target.value)}
        />
        Female
        <br />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}