exports = async function(){
  var collection = context.services.get("mongodb-atlas").db("my-app").collection("salas");
  return collection.find({});
};