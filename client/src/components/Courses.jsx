import React from "react";
import "./Courses.css";

const courses = [
  {
    id: 1,
    category: "Photography",
    title: "Create An LMS Website With LearnPress",
    author: "By DebernardoPuhn",
    duration: "2 Weeks",
    students: "150 Students",
    price: "$200",
    image: "https://source.unsplash.com/300x200/?photography",
  },
  {
    id: 2,
    category: "Photography",
    title: "Create An LMS Website With LearnPress",
    author: "By DebernardoPuhn",
    duration: "2 Weeks",
    students: "150 Students",
    price: "Free",
    image: "https://source.unsplash.com/300x200/?laptop",
  },
  {
    id: 3,
    category: "Photography",
    title: "Create An LMS Website With LearnPress",
    author: "By DebernardoPuhn",
    duration: "2 Weeks",
    students: "150 Students",
    price: "$300",
    image: "https://source.unsplash.com/300x200/?student",
  },
  {
    id: 4,
    category: "Photography",
    title: "Create An LMS Website With LearnPress",
    author: "By DebernardoPuhn",
    duration: "2 Weeks",
    students: "150 Students",
    price: "$290",
    image: "https://source.unsplash.com/300x200/?teacher",
  },
  {
    id: 5,
    category: "Photography",
    title: "Create An LMS Website With LearnPress",
    author: "By DebernardoPuhn",
    duration: "2 Weeks",
    students: "150 Students",
    price: "$290",
    image: "https://source.unsplash.com/300x200/?work",
  },
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h2 className="courses-title">All Courses</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <span className="course-category">{course.category}</span>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-author">{course.author}</p>
            <p className="course-info">
              {course.duration} • {course.students}
            </p>
            <p className="course-price">{course.price}</p>
            <button className="course-button">View More</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
      </div>
    </div>
  );
};

export default Courses;
