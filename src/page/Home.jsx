import { useState } from "react";

const Home = () => {
  const [content, setContent] = useState("Rnpr초기값");

  const onSubmitChat = (e) => {
    e.preventDefault();
    //text에 질문을 입력 받아서 서버로 보내주는 작업이 필요함
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitChat}>
        <input type="text" value={content} onChange={onChangeContent} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Home;
