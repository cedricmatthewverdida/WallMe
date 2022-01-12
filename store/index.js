export const strict = false;
import Moralis from 'moralis';
const TABLE_PROVIDER = "Provider"

export const state = () => ({
    user:[],
})



export const mutations = {

    authorize_loggin(state,user){
        return state.user = user;
    },
}

export const actions = {


    async makeAuth ({commit}){

        const Provider =  Moralis.Object.extend(TABLE_PROVIDER);
        const provider = new Provider();
        const query = new Moralis.Query(Provider);

        query.equalTo('fbid', this.$auth.user.id);
        const result = await query.first();


        if(result == undefined){
            
            await provider.save({
                fbid: this.$auth.user.id ,
                name: this.$auth.user.name
            })
            .then((save) => {
                return save
            }, (error) => {
                return error.message
            });

        }else{
            commit('authorize_loggin', result)
        }
    }

}
