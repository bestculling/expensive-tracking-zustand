import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface accountType {
  id: number;
  money: number;
  tag: string;
  desc: string;
  createAt: string;
}

interface storeType {
  balance: number;
  account: accountType[];
  income: (desc: string, money: number, tag: string, createAt: string) => void;
  expense: (desc: string, money: number, tag: string, createAt: string) => void;
}

const useStorePersist: any = persist<storeType>(
  (set) => ({
    balance: 0,
    account: [],
    income: (desc, money, tag, createAt) =>
      set((state) => ({
        balance: state.balance + money,
        account: [
          ...state.account,
          {
            id: state.account.length,
            desc,
            money,
            tag,
            createAt,
          },
        ],
      })),
    expense: (desc, money, tag, createAt) =>
      set((state) => ({
        balance: state.balance - money,
        account: [
          ...state.account,
          {
            id: state.account.length,
            desc,
            money,
            tag,
            createAt,
          },
        ],
      })),
  }),
  {
    name: "account-store",
    storage: createJSONStorage(() => sessionStorage)
  }
);

export const useStore = create<storeType>(useStorePersist);
