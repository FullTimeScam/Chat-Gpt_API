import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-2 flex justify-center gap-8 shadow-md">
      <Link className="link-style" to="/">
        질문하기
      </Link>
      <Link className="link-style" to="chat-list">
        내 질문 리스트
      </Link>
    </header>
  );
};

export default Header;
