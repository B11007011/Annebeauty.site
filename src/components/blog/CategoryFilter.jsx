export default function CategoryFilter({ categories, selected, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onChange(null)}
        className={`px-4 py-2 rounded-full ${
          !selected ? 'bg-primary text-white' : 'bg-gray-100'
        }`}
      >
        所有類別
      </button>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-full ${
            selected === category ? 'bg-primary text-white' : 'bg-gray-100'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
} 