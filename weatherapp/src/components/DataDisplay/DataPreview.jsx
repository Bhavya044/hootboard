import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getValueByNestedKey } from "../../utils/functions";

const DataPreview = ({ config, data }) => {
  return config?.map((item) => {
    return (
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={item?.icon} className="text-blue-500 text-2xl" />
        <span className="font-bold">
          {item?.title}: {getValueByNestedKey(data, item?.dataKey)} {item?.unit}
        </span>
      </div>
    );
  });
};

export default DataPreview;
