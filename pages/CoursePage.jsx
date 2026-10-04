import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen, FileText } from "lucide-react";
import { coursesByLevel } from "../data/courses";

export default function CoursePage() {
  const { level, courseId } = useParams();

  const courses = coursesByLevel[level] || [];
  const course = courses.find(
    (item) => String(item.id) === courseId
  );

  if (!course) {
    return (
      <div className="level-page">
        <h1>Course not found</h1>
        <Link to={`/courses/${level}`}>
          Back to courses
        </Link>
      </div>
    );
  }

  return (
    <div className="level-page">
      <Link to={`/courses/${level}`} className="back-link">
        <ArrowLeft size={16} /> Back to courses
      </Link>

      <h1>{course.code}</h1>
      <p>{course.title}</p>

      <section className="course-materials">
        <BookOpen size={32} />
        <h2>Learning Materials</h2>
        <p>Lecture notes and PDF materials for this course will appear here.</p>

        <div className="subject-card">
          <FileText size={22} />
          <span>No PDF materials uploaded yet.</span>
        </div>
      </section>
    </div>
  );
}