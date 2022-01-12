const logger = Moralis.Cloud.getLogger();
const TABLE_PROVIDER = "Provider";





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