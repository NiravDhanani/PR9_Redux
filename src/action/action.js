

export const Add_User = (data) => {
  return {
    type: "Add",
    payload : data
  };
};

export const Delete_user = (id) => {
  return {
    type: "Delete",
    payload : id,
  };
};
