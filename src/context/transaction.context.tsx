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

export type TransactionContextType = {
  fetchCategories: () => Promise<void>;
  categories: TransactionCategory[];
};

export const TransancionContext = createContext({} as TransactionContextType);

export const TransactionContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [categories, setCategories] = useState<TransactionCategory[]>([]);

  console.log(categories);

  const fetchCategories = async () => {
    const categoriesResponse =
      await transactionService.getTrabsactionCategories();

    setCategories(categoriesResponse);
  };

  return (
    <TransancionContext.Provider value={{ fetchCategories, categories }}>
      {children}
    </TransancionContext.Provider>
  );
};

export const useTransactionContext = () => {
  return useContext(TransancionContext);
};
