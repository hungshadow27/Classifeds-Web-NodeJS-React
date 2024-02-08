import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Breadcrumb = (props) => {
  const { first, second } = props;
  return (
    <div className="text-sm flex items-end gap-1">
      <Link to="/" className="text-blue-800">
        {first}
      </Link>
      <MdKeyboardDoubleArrowRight size={15} />
      <span>{second}</span>
    </div>
  );
};

export default Breadcrumb;
