import WriteBox from "../../components/write/WriteBox.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Write = () => {

  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('access_token');
  //   if (!token) {
  //     alert('로그인이 필요합니다.');
  //     navigate('/login');
  //   }
  // }, [navigate]);

  return (
    <>
      <WriteBox />
    </>
  )
}

export default Write;