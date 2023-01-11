import axios from "axios";

export const generateJoke = () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  axios.get("https://icanhazdadjoke.com", config).then((res) => {
    console.log(res.data);
    document.getElementById("joke").innerHTML = res.data.joke;
  });
  return "I had my hands on Guines book of records, then the librarian told me to take it out.";
};
