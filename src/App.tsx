import React, { useEffect, useState } from "react";
import TextInput from "./components/TextInput";
import NotificationList from "./components/Notifications/NotificationList";
import { NotificationItemProps } from "./types";
import LoadingComponent from "./components/LoadingComponent";
import EmptyComponent from "./components/EmptyComponent";

const API = "http://localhost:5001";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | NotificationItemProps[]>(null);

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

  const hasResults = results && results.length > 0;

  return (
    <div className="container mx-auto">
      <div className="pb-4">
        <TextInput value={searchText} onChange={setSearchText} placeholder="Type to filter events" />
      </div>
      {isLoading && <LoadingComponent />}
      {!isLoading && !hasResults && <EmptyComponent />}
      {!isLoading && hasResults && <NotificationList notifications={results} />}
    </div>
  );
};

export default App;
