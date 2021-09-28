import axios from 'axios';

export const fetchUser = async token => {
  const response = await axios.get(
    'https://gymhop-api-staging.herokuapp.com/api/v1/users/me',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data.data;
};

export const putRequest = async (data, headers) => {
  try {
    const res = await axios.put(
      'https://gymhop-api-staging.herokuapp.com/api/v1/users/me',
      data,
      headers,
    );
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
