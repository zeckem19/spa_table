
export const actions = {
  // new(IP) {
  //   return {
  //     type: types.NEW_IP,
  //     payload: {folder}
  //   };
  // },

  deleteIP(ip) {
    return {
      type: 'DEL_IP',
      payload: {ip}
    };
  }
};

export const types = {
  NEW_IP: 'NEW_IP',
  DEL_IP: 'DEL_IP',
};