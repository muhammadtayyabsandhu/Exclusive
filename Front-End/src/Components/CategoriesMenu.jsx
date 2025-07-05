import React from "react";

export default function CategoriesMenu() {
  const categories = [
    "Women's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="bg-white p-4 w-full md:w-60 border-r border-gray-200">
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat}>
            <a
              href="#"
              className="block py-1 px-2 hover:bg-gray-100 hover:text-blue-500 rounded"
            >
              {cat}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
