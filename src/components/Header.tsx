import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="text-white px-6 py-3 flex justify-between items-center"
      style={{ backgroundColor: "#0072CE" }}
    >
      <Link to="/" className="text-lg font-bold">학식 알리미</Link>
      <nav className="space-x-6 text-sm">
        <Link to="/menu" className="hover:underline">식단</Link>
        <Link to="/board" className="hover:underline">게시판</Link>
        <Link to="/mypage" className="hover:underline">마이페이지</Link>
        <Link to="/login" className="hover:underline">로그인</Link>
      </nav>
    </header>
  );
}
