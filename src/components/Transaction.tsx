import { useState } from "react";
import { useStore } from "../store";

export default function Transaction() {
  const { income, expense } = useStore();

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<any>();
  const [tag, setTag] = useState<string>("");
  const [money, setMoney] = useState<string>("0");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const date = new Date();
    const createAt = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    if (selected === "รายรับ") {
      income(selected, parseInt(money), tag, createAt);
    } else {
      expense(selected, parseInt(money), tag, createAt);
    }
    setTag("");
    setMoney("");
    setShow(true);
  };

  return (
    <div className="flex flex-col px-3 mt-5">
      {/* Alert */}
      <div
        style={show ? { display: "block" } : { display: "none" }}
        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">ทำรายการสำเร็จ</strong>
        <span
          className="absolute top-0 bottom-0 right-0 px-4 py-3"
          onClick={() => setShow(false)}
        >
          <svg
            className="fill-current h-6 w-6 text-green-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
      {/* END */}
      <div className="text-2xl my-4">จัดการ</div>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3">
        <label
          htmlFor="categories"
          className="block mb-2 text-sm font-medium text-white"
        >
          เลือกประเภททำรายการ
        </label>
        <select
          required
          id="categories"
          onChange={(e) => setSelected(e.target.value)}
          className="block py-2.5 px-0 w-36 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none"
        >
          <option defaultValue={undefined}>เลือก</option>
          <option>รายรับ</option>
          <option>รายจ่าย</option>
        </select>
        <div>ประเภท</div>
        <input
          className="rounded-md text-black"
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          required
        />
        <div>จำนวนเงิน</div>
        <input
          className="rounded-md text-black"
          type="number"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
          required
        />
        <button
          className="w-52 bg-green-500 py-2 px-5 rounded-md"
          type="submit"
        >
          ยืนยัน
        </button>
      </form>
    </div>
  );
}
