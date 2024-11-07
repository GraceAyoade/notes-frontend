import { useState } from "react";
import "./Home.css";
import MainArea from "../../components/MainArea";
import SideNav from "../../components/SideNav";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const [notes, setNotes] = useState([]);
  const { isError, error, isLoading, refetch } = useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });

  async function fetchNotes() {
    const response = await axios.get(process.env.REACT_APP_API_URL as string);
    setNotes(response.data);
    return response.data
  }

  return (
    <section className="poppins-extralight container">
      <SideNav />
      {isLoading ? (
        "Loading notes..."
      ) : isError ? (
        "An error occured while fetching notes..."
      ) : (
        <MainArea notes={notes} error={error} refetch={refetch} />
      )}
    </section>
  );
}

export default Home;
