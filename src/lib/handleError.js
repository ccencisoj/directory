const handleError = (error, req, res, consoleError)=> {
  if(consoleError) 
    console.log(error);

  if(error.toJSON)
    return res.json({error});

  return res.json({
    statusCode: 500,
    name: "UnknownError",
    message: "Unknown Error"
  });
}

export default handleError;