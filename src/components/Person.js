import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../lib/api";

export default function People() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [isOwn, setIsOwn] = useState(false);
  const [items, setItems] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    API.GET(API.ENDPOINTS.singlePerson(id))
      .then(({ data }) => {
        setPerson(data);
        console.log(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, [id]);

  useEffect(() => {
    API.GET(API.ENDPOINTS.itemsPull(id))
      .then(({ data }) => {
        setItems(data);
        console.log(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, []);

  // const navTo = (e) => {
  //   if (e.target.value === "owner") {
  //     navigate(`/edit-item/${id}`);
  //   } else {
  //     navigate(`/people/${singleItem.categories[0].name}`);
  //   }
  // };

  return (
    <div>
      <h1>person</h1>
    </div>
  );
}
