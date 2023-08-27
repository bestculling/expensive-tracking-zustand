import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { BsFileMinusFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import Transaction from "./Transaction";
import { useStore } from "../store";
import { Link } from "react-router-dom";

export default function Tracking() {
  const [show, setShow] = useState(false);
  const { balance, account } = useStore();

  // รายจ่ายทั้งหมด
  const expense = account.filter((el) => el.desc === "รายจ่าย");
  const totalExpense = expense.reduce((sum, obj) => sum + obj.money, 0);

  // รายรับทั้งหมด
  const income = account.filter((el) => el.desc === "รายรับ");
  const totalIncome = income.reduce((sum, obj) => sum + obj.money, 0);

  return (
    <div className="py-2 text-white flex flex-col justify-center">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center">
        <div className="text-xl text-gray-500">ยอดเงินคงเหลือ</div>
        <div className="text-5xl">{balance} บาท</div>
        <div>
          <button
            onClick={() => setShow(!show)}
            className={`w-52 ${
              show ? "bg-red-500" : "bg-yellow-500"
            } py-2 px-5 rounded-md`}
          >
            {show ? "ยกเลิก" : "ทำรายการ"}
          </button>
        </div>
      </div>
      {/* END */}
      {show ? (
        <Transaction />
      ) : (
        <div>
          {/* Trans */}
          <div className="flex flex-col mt-5 sm:mt-12">
            {/* Income */}
            <div className="border-2 border-gray-500 rounded-md p-5 m-2">
              <div className="mb-3 flex items-center gap-2">
                <div className="bg-green-300 p-3 rounded-full">
                  <BsPlusCircleFill />
                </div>
                <div className="text-lg">รายรับ</div>
              </div>
              <hr />
              <div className="flex justify-between mt-3">
                <div>{totalIncome} บาท</div>
                <div className="text-yellow-500">
                  <Link to="income">ดูรายการทั้งหมด</Link>
                </div>
              </div>
            </div>
            {/* END */}
            {/* Expense */}
            <div className="border-2 border-gray-500 rounded-md p-5 m-2">
              <div className="mb-3 flex items-center gap-2">
                <div className="bg-red-300 p-3 rounded-full">
                  <BsFileMinusFill />
                </div>
                <div className="text-lg">รายจ่าย</div>
              </div>
              <hr />
              <div className="flex justify-between mt-3">
                <div>{totalExpense} บาท</div>
                <div className="text-yellow-500">
                  <Link to="expense">ดูรายการทั้งหมด</Link>
                </div>
              </div>
            </div>
            {/* END */}
            {/* History */}
            <div className="border-2 border-gray-500 rounded-md p-5 m-2">
              <div className="mb-3 flex items-center gap-2">
                <div className="bg-gray-500 p-3 rounded-full">
                  <FaHistory />
                </div>
                <div className="text-lg">ประวัติ</div>
              </div>
              <hr />
              <div className="flex justify-between mt-3">
                <div>{balance} บาท</div>
                <div className="text-yellow-500">
                  <Link to="history">ดูรายการทั้งหมด</Link>
                </div>
              </div>
            </div>
            {/* END */}
          </div>
          {/* END */}
        </div>
      )}
    </div>
  );
}
