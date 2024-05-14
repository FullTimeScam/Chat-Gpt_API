import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-100 px-2 flex justify-center gap-8">
      <Link className="link-style" to="/">
        질문하기
      </Link>
      <Link className="link-style" to="chat_list">
        내 질문 리스트
      </Link>
    </header>
  );
};

export default Header;
