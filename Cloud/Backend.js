const logger = Moralis.Cloud.getLogger();
const TABLE_PROVIDER = "Provider";
const TABLE_POST = "Post";

Moralis.Cloud.define('getUserReact', async (request) => {

    const Provider = Moralis.Object.extend(TABLE_PROVIDER);
    const query = new Moralis.Query(Provider);
    query.equalTo("objectId", request.params.id);
    const result = await query.first();

    const providerID = result;

    const relation = providerID.relation("heart");

    const query2 = relation.query();
    query2.withCount();

    const results = await query2.find();
    return results
});


Moralis.Cloud.define('getWallPost', async (request) => {

    const Post = Moralis.Object.extend(TABLE_POST);
    const query = new Moralis.Query(Post);
    query.equalTo("stalkId", request.params.id);
    query.exclude("providerId");

    const result = await query.find();
    return result
});



Moralis.Cloud.define('stalkUser', async (request) => {
    const Provider = Moralis.Object.extend(TABLE_PROVIDER);
    const query = new Moralis.Query(Provider);
    query.equalTo("objectId", request.params.id);
    query.exclude("fbid");

    const result = await query.first();
    return result
});


Moralis.Cloud.define('authorize', async (request) => {
    
    const Provider =  Moralis.Object.extend(TABLE_PROVIDER);
    const provider = new Provider();

    await provider.save({
        fbid: request.params.id ,
        name: request.params.name 
    })
    .then((save) => {
        return save
    }, (error) => {
        return error.message
    });

});


async function saveNewUser(id,name) {


    const Provider =  Moralis.Object.extend(TABLE_PROVIDER);
    const provider = new Provider();

    await provider.save({
        fbid: id,
        name: name
    })
    .then((save) => {
        return save
    }, (error) => {
        return error.message
    });

}