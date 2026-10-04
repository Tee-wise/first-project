import { useState } from "react";
import { levels } from "../data/courses";
import SearchBar from "../components/Searchbar";
import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [query, setQuery] = useState("");

  const filteredLevels = levels.filter((level) =>
    level.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="main-content">
      <SearchBar query={query} setQuery={setQuery} />

      <Hero />

      <section className="category-heading" id="courses">
        COURSES CATEGORIES
      </section>

      <section className="courses-grid">
        {filteredLevels.map((level) => (
          <CourseCard key={level.id} level={level} />
        ))}
      </section>

      {filteredLevels.length === 0 && (
        <p>No levels found for "{query}".</p>
      )}

      <section className="info-strip">
        <div>
          <strong>Dashboard</strong>
          <span>
            {query
              ? `Showing levels for "${query}"`
              : "Your learning space"}
          </span>
        </div>

        <Link to="/study-plan" className="study-plan-link">
          Open Study Plan <ArrowRight size={15} />
        </Link>
      </section>
    </div>
  );
}