import MainBox from "../../components/main/MainBox.jsx";
import {useEffect, useState} from "react";
import {getLatestPost} from "../../api/post/post.js";

const Main = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMain = async () => {
    setIsLoading(true);
    const response = await getLatestPost();
    setData(response.data.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getMain();
  }, []);
  return (
    <>
      <MainBox data={data} isLoading={isLoading} />
    </>
  )
}

export default Main;