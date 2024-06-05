import { DirectoryItemsInterface } from "../../interfaces/DirectoryInterface";

const CategoryItem: React.FC<DirectoryItemsInterface> = ({ title, category, image }) => {
    return (
      <div className="categories-container">
        <div className="category-container">
          <div className="background-image" style={{ backgroundImage: `url(${image})` }}></div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>{category}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CategoryItem;