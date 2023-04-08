import useProductFormStore from "../../hooks/useProductFormStore";
import { ProductOption, ProductOptionItem } from "../../types";
import { ChangeFunction } from "../product-detail/form/Options";
import Option from "./Option";

export default function Options() {
  const [{ product, selectedOptionItems }, store] = useProductFormStore();

  const handleChange: ChangeFunction = ({ optionId, optionItemId }) => {
    store.changeOptionItem({ optionId, optionItemId });
  };

  return (
    <div>
      {product.options.map((option, index) => (
        <Option
          key={option.id}
          option={option}
          selectedItem={selectedOptionItems[index]}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}
