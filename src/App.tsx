import React, { useEffect, useState } from "react";
import TextInput from "./components/TextInput";

const API = "http://localhost:5001";

type TransactionProps = {
  id: number;
  amount: number;
  unit: string;
  from: string;
  to: string;
};

type AccountCreatedProps = {
  id: number;
  name: string;
  currency: string;
};

type NotificationDataProps = {
  type: 'TRANSACTION_RECEIVED' | 'ACCOUNT_CREATED' | 'TRANSACTION_SENT';
  data: TransactionProps | AccountCreatedProps;
};

type NotificationProps = {
  id: string;
  type: string;
  data: NotificationDataProps;
};

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | NotificationProps[]>(null);

  useEffect(() => {
    const effect = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API}/search?q=${searchText}`);
        const data = await res.json();
        setResults(data);
        setLoading(false);
      } catch(e) {
        setLoading(false);
        throw e;
      }
    };
    effect();
  }, [searchText, setLoading, setResults]);

  return (
    <div>
      <TextInput value={searchText} onChange={setSearchText} placeholder="Type to filter events" />
      {isLoading ? (
        <div>{"Loading..."}</div>
      ) : results ? (
        <div>
          {results.map((r) => (
            // TODO we must finalize this integration!! not very pretty like this
            <div key={r.id.toString()} className="border border-dashed">{JSON.stringify(r)}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default App;
