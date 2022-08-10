const token = localStorage.getItem("token");

const config = {
  headers: {
    authorization: `Bearer ${token}`,
  },
};

export default config