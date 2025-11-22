import { TransactionCategory } from "@/shared/interfaces/https/transaction-category-response";
import {
  createContext,
  FC,
  PropsWithChildren,
  use,
  useContext,
  useState,
} from "react";
import * as transactionService from "@/shared/serives/dt-money/transaction.service";
import { CreateTransactionInterface } from "@/shared/interfaces/https/create-transaction-request";

export type TransactionContextType = {
  fetchCategories: () => Promise<void>;
  categories: TransactionCategory[];
  createTransaction: (transaction: CreateTransactionInterface) => Promise<void>;
};

export const TransancionContext = createContext({} as TransactionContextType);

export const TransactionContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [categories, setCategories] = useState<TransactionCategory[]>([]);

  const fetchCategories = async () => {
    const categoriesResponse =
      await transactionService.getTrabsactionCategories();

    setCategories(categoriesResponse);
  };

  const createTransaction = async (transaction: CreateTransactionInterface) => {
    await transactionService.createTransaction(transaction);
  };

  return (
    <TransancionContext.Provider
      value={{
        categories,
        fetchCategories,
        createTransaction,
      }}
    >
      {children}
    </TransancionContext.Provider>
  );
};

export const useTransactionContext = () => {
  return useContext(TransancionContext);
};
