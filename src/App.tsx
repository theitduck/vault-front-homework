import { useEffect, useState } from "react";
import TextInput from "./components/TextInput";

const API = "http://localhost:5001";

type Notif = {
  id: string;
  type: string;
  // FIXME we should *probably* not have this `any`
  data: any;
};

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | Notif[]>(null);

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
            <div className="border border-dashed">{JSON.stringify(r)}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default App;
