import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/content";

const useFetchMenu = (reid) => {
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await fetch(MENU_URL + reid);
    const jsonData = await Data.json();
    setResInfo(jsonData);
  };
  return resInfo;
};

export default useFetchMenu;
