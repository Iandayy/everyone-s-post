import { useSetRecoilState } from "recoil";
import { categoryState } from "../../../recoil/atom/categoryState";
import instance from "../../../service/request";

import Button from "../../../components/Button";

const Delete = ({ id }) => {
  const setCategory = useSetRecoilState(categoryState);

  const deleteHandler = async () => {
    const res = await instance.delete(`/posts/${id}`);
    alert(res.data.message);
    setCategory("all");
    window.location.replace("/posts/all");
  };

  return (
    <form>
      <Button str="Delete" onClick={deleteHandler} />
    </form>
  );
};

export default Delete;
