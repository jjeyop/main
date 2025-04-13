type Props = {
  menu?: string[];
};

export default function MealCard({ menu }: Props) {
  const isEmpty = !menu || menu.length === 0;

  const fixedPlace = "학생식당";
  const fixedTime = "11:00 ~ 13:30";
  const fixedPrice = "6,000원";
  const fixedMenu = ["고구마치즈돈까스", "치즈돈까스"];

  const menuList = menu ?? [];

  return (
    <div className="bg-white h-full min-h-[250px] p-4 rounded-xl shadow border flex flex-col justify-between relative">
      <div className="absolute top-4 right-4 text-sm text-gray-500">
        본관 지하 1층
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">{fixedPlace}</h2>
        <p className="text-gray-600 text-sm">{fixedTime}</p>
      </div>

      <div className="flex-grow flex flex-col justify-start mt-4 space-y-4">
        {isEmpty ? (
          <div className="text-gray-400 text-center text-sm">
            식단 정보가 없습니다.
          </div>
        ) : (
          <>
            <div className="text-base text-gray-500 space-y-3">
              {menuList.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>

            <div className="pt-5 border-t border-gray-200 text-sm">
              <p className="text-lg font-semibold text-gray-800 mb-7">고정 메뉴</p>
              <div className="text-base text-gray-500 space-y-10">
                {fixedMenu.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {!isEmpty && (
        <div className="mt-6 text-lg font-bold text-gray-800">
          가격: {fixedPrice}
        </div>
      )}
    </div>
  );
}
