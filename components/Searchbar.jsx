import { Search } from "lucide-react";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="search-wrap">
      <Search size={16} />

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search courses..."
        aria-label="Search courses"
      />
    </div>
  );
}