import { useNavigate } from "react-router-dom";
import NotFoundImg from "../../assets/NotFound.jpg";
import { NotFoundContainer, Img, Button } from "./NotFound.styled";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <Img src={NotFoundImg} alt="404" />
      <Button onClick={() => navigate(-1)}>Back</Button>
    </NotFoundContainer>
  );
};

export default NotFound;
