import { TransactionCategory } from "@/shared/interfaces/https/transaction-category-response";
import {
  createContext,
  FC,
  PropsWithChildren,
  use,
  useCallback,
  useContext,
  useState,
} from "react";
import * as transactionService from "@/shared/serives/dt-money/transaction.service";
import { CreateTransactionInterface } from "@/shared/interfaces/https/create-transaction-request";
import { Transaction } from "@/shared/interfaces/transaction";
import { TotalTransactions } from "@/shared/interfaces/total-transactions";
import { UpdateTransactionInterface } from "@/shared/interfaces/https/update-transaction-request";

export type TransactionContextType = {
  fetchCategories: () => Promise<void>;
  categories: TransactionCategory[];
  createTransaction: (transaction: CreateTransactionInterface) => Promise<void>;
  updateTransaction: (transaction: UpdateTransactionInterface) => Promise<void>;
  fetchTransactions: () => Promise<void>;
  totalTransactions: TotalTransactions;
  transactions: Transaction[];
};

export const TransancionContext = createContext({} as TransactionContextType);

export const TransactionContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [categories, setCategories] = useState<TransactionCategory[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalTransactions, setTotalTransactions] = useState<TotalTransactions>(
    {
      revenue: 0,
      expense: 0,
      total: 0,
    }
  );

  const fetchCategories = async () => {
    const categoriesResponse =
      await transactionService.getTrabsactionCategories();

    setCategories(categoriesResponse);
  };

  const createTransaction = async (transaction: CreateTransactionInterface) => {
    await transactionService.createTransaction(transaction);
  };

  const updateTransaction = async (transaction: UpdateTransactionInterface) => {
    await transactionService.updateTransaction(transaction);
  };

  const fetchTransactions = useCallback(async () => {
    const transactionsResponse = await transactionService.getTransactions({
      page: 1,
      perPage: 10,
    });

    setTransactions(transactionsResponse.data);
    setTotalTransactions(transactionsResponse.totalTransactions);
  }, []);

  return (
    <TransancionContext.Provider
      value={{
        categories,
        fetchCategories,
        createTransaction,
        updateTransaction,
        fetchTransactions,
        totalTransactions,
        transactions,
      }}
    >
      {children}
    </TransancionContext.Provider>
  );
};

export const useTransactionContext = () => {
  return useContext(TransancionContext);
};
