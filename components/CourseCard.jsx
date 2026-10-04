import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CourseCard({ level }) {
  return (
    <Link
      to={level.path}
      className="course-card"
      style={{ "--accent": level.accent }}
    >
      <div
        className="course-photo"
        style={{
          backgroundImage: 'url("${level.image}")',
        }}
      />

      <div className="course-label">
        {level.name}
        <ArrowRight size={16} />
      </div>
    </Link>
  );
}