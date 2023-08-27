import { Link } from "react-router-dom";
import { useStore } from "../store";
import { AiFillBackward } from "react-icons/ai";

export default function Income() {
  const { account } = useStore();
  const income = account.filter((el) => el.desc === "รายรับ");
  return (
    <div className="text-white">
      <button className="flex items-center gap-1 bg-blue-500 px-5 py-2 rounded-md m-3">
        <AiFillBackward />
        <Link to="/">ย้อนกลับ</Link>
      </button>
      <div className="flex flex-col items-center">
        <div className="text-3xl">รายการทั้งหมด</div>
        {account.length !== 0 ? (
          <div className="w-56 mt-8">
            {income.map((el) => (
              <div className="mt-2" key={el.id}>
                <div className="flex justify-between">
                  <div>{el.tag}</div>
                  <div>{el.createAt}</div>
                </div>
                <div className={`flex justify-end text-green-300`}>
                  + {el.money}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8">ยังไม่มีรายการ</div>
        )}
      </div>
    </div>
  );
}
