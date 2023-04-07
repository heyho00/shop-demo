import { Link } from "react-router-dom";
import { LineItem } from "../../types";
import numberFormat from "../../utils/numberFormat";
import Options from "./Options";

type LineItemViewProp = {
  lineItem: LineItem;
};

export default function LineItemView({ lineItem }: LineItemViewProp) {
  return (
    <tr>
      <td>
        <Link to={`/products/${lineItem.product.id}`}>
          {lineItem.product.name}
        </Link>
        <Options options={lineItem.options} />
      </td>
      <td>{numberFormat(lineItem.unitPrice)}원</td>
      <td>{lineItem.quantity}</td>
      <td>{numberFormat(lineItem.totalPrice)}원</td>
    </tr>
  );
}
