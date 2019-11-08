import request from "request";

export const search = async (req, res) => {
  // const searchingBy = req.query.term;와 같다
  const {
    query: { url: searchingBy }
  } = req;

  const checkHttp = searchingBy.substr(0, 3);
  var Url;

  if (checkHttp !== "http") {
    Url = "http://" + searchingBy;
  } else {
    Url = searchingBy;
  }
  request(Url, function(error, response, body) {
    console.log("Url=" + Url);
    console.log("Code="+response.statusCode);
    if (response.statusCode <= 445) {
      return res.send("Up!");
    } else {
      return res.json("Down!");
    }
  });
};
