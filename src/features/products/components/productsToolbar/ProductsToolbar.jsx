import { Search, SlidersHorizontal } from "lucide-react";
import { categoryOptions, priceOptions } from "../../data/filterOptions";
import FilterDropdown from "../filterDropdown/FilterDropdown";
import FilterList from "../filterList/FilterList";
import ColumnToggle from "../columnToggle/ColumnToggle";
import styles from "./productsToolbar.module.css";

const ProductsToolbar = ({
  search, onSearch,
  selectedCategories, onToggleCategory,
  priceFilter, onSelectPrice,
  visibleColumns, onToggleColumn,
}) => (
  <div className={styles.toolbar}>
    <div className={styles.left}>
      <label className={styles.searchBox}>
        <Search size={16} />
        <input
          type="text"
          placeholder="Search by product name"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
      </label>
      <FilterDropdown label="Category" count={selectedCategories.length}>
        <FilterList
          placeholder="Category"
          options={categoryOptions}
          selected={selectedCategories}
          onSelect={onToggleCategory}
        />
      </FilterDropdown>
      <FilterDropdown label="Price" count={priceFilter ? 1 : 0}>
        <FilterList
          placeholder="Price"
          options={priceOptions}
          selected={priceFilter ? [priceFilter] : []}
          onSelect={onSelectPrice}
        />
      </FilterDropdown>
    </div>
    <FilterDropdown label="View" icon={SlidersHorizontal} align="right">
      <ColumnToggle visibleColumns={visibleColumns} onToggle={onToggleColumn} />
    </FilterDropdown>
  </div>
);

export default ProductsToolbar;