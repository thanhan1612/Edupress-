import React from "react";
import "./Categories.css";

const categories = [
  { name: "Art & Design", icon: "🎨" },
  { name: "Development", icon: "💻" },
  { name: "Communication", icon: "📢" },
  { name: "Videography", icon: "📹" },
  { name: "Photography", icon: "📷" },
  { name: "Marketing", icon: "📈" },
  { name: "Content Writing", icon: "📝" },
  { name: "Finance", icon: "💰" },
  { name: "Science", icon: "🔬" },
  { name: "Network", icon: "🌐" }
];

const Categories = () => {  
  return (
    <div className="categories">
      <h2 className="categories-title">Top Categories</h2>
      <p className="categories-subtitle">Explore our Popular Categories</p>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <h3 className="category-name">{category.name}</h3>
            <p className="category-courses">38 Courses</p>
          </div>
        ))}
      </div>
      <button className="all-categories-btn">All Categories</button>
    </div>
  );
};

export default Categories;
