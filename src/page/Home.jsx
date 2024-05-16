import { useState } from "react";

const Home = () => {
  const [content, setContent] = useState("");

  const onSubmitChat = (e) => {
    e.preventDefault();

    // text 질문을 입력 받아서 서버로 ㄱㄱ
  };

  return (
    <div className="mt-8 flex justify-center">
      <form onSubmit={onSubmitChat}>
        <input
          className="text-2xl p-2 focus:outline-none rounded-lg border-2 border-orange-200 focus:border-orange-400"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          className="ml-4 bg-orange-200 text-2xl px-4 py-[10px] rounded-full shadow-md shadow-orange-300 hover:bg-blue-500 focus:bg-green-500"
          type="submit"
          value="질문하기"
        />
      </form>
    </div>
  );
};

export default Home;
