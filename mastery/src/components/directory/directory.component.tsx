import React from 'react';
import { DirectoryItemsInterface } from '../../interfaces/DirectoryInterface';
import CategoryItem from '../category-item/category-item.component';
import './directory.style.scss'
interface DirectoryProps {
  categories: DirectoryItemsInterface[];
}

const Directory: React.FC<DirectoryProps> = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ key, title, category, image }) => (
        <CategoryItem key={key} title={title} category={category} image={image} />
      ))}
    </div>
  );
};

export default Directory;
