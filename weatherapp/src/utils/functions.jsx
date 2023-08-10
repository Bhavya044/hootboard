// utils.js
export const getValueByNestedKey = (data, dataKey) => {
  if (dataKey?.includes(".")) {
    const keys = dataKey.split(".");
    let value = data;
    for (const key of keys) {
      value = value[key];
    }
    return value;
  } else {
    return data[dataKey];
  }
};

export const formatTimeFromEpoch = (time_epoch) => {
  const formattedTime = new Date(time_epoch * 1000).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return formattedTime;
};
