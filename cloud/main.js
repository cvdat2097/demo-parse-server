Parse.Cloud.define("countGamers", async function(req) {
    const query = new Parse.Query("Gamers");
    let response;

    await query.find()
      .then((results) => {
        response = results.length;
    });

    return response;
});