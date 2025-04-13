import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Calendar from "./components/Calendar";
import MealCard from "./components/MealCard";
import Header from "./components/Header";
import { mealData } from "./data/mealData";
import { format } from "date-fns";

function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dateKey = format(selectedDate, "yyyy-MM-dd");
  const meal = mealData[dateKey];

  return (
    <main className="flex flex-1 px-10 py-14 max-w-screen-xl mx-auto items-stretch">
      <div className="w-1/2 pr-4">
        <div className="h-full min-h-[500px]">
          <Calendar selectedDate={selectedDate} onChange={setSelectedDate} />

          <div className="flex justify-center mt-4 space-x-4">
            <button className="flex items-center justify-center w-44 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-xl shadow">
              <span className="mr-2">☰</span> 내가 쓴 글
            </button>
            <button
              className="flex items-center justify-center w-44 px-4 py-2 text-white rounded-xl shadow"
              style={{ backgroundColor: "#0072CE" }}
            >
              <span className="mr-2">☰</span> 게시판 글쓰기
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/2 pl-4 flex">
        <div className="flex-1">
          <div className="h-full min-h-[500px]">
            <MealCard menu={meal?.menu} />
          </div>
        </div>
      </div>
    </main>
  );
}

function Page({ title }: { title: string }) {
  return (
    <div className="flex-1 p-10 text-lg text-gray-600">
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Home />} />
            <Route path="/board" element={<Page title="게시판" />} />
            <Route path="/mypage" element={<Page title="마이페이지" />} />
            <Route path="/login" element={<Page title="로그인" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
