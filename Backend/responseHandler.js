const responseHandler = (data, res) => {
  try {
    if (data.error) {
      return {
        error: data.error,
      };
    }
    return {
      response: data.response,
    };
  } catch (error) {
    console.log(error);
    return res.send( {
      error: error,
    });
  }
};

module.exports=responseHandler;
