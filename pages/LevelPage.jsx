import { Link } from "react-router-dom";
import { coursesByLevel } from "../data/courses";
import { BookOpen, ArrowLeft } from "lucide-react";

export default function LevelPage({ level }) {
  const courses = coursesByLevel[level] || [];

  return (
    <div className="level-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={16} /> Back to Dashboard
      </Link>

      <h1>{level} Level Courses</h1>
      <p>Select a course to access its learning materials.</p>

      <div className="course-list">
        {courses.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${level}/${course.id}`}
            className="subject-card"
          >
            <BookOpen size={22} />

            <div>
              <strong>{course.code}</strong>
              <p>{course.title}</p>
            </div>

            <span>View course →</span>
          </Link>
        ))}
      </div>

      {courses.length === 0 && (
        <p>No courses have been added to this level yet.</p>
      )}
    </div>
  );
}