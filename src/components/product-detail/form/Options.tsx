import useProductFormStore from "../../../hooks/useProductFormStore";
import Option from "./Option";

export type ChangeFunction = ({
  optionId,
  optionItemId,
}: {
  optionId: string;
  optionItemId: string;
}) => void;

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
