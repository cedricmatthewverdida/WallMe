export const strict = false;
import Moralis from 'moralis';
const TABLE_PROVIDER = "Provider"
const TABLE_WALL = "Post"
export const state = () => ({
    user:[],
    reactor:[],

    stalk:[],
})



export const mutations = {

    authorize_loggin(state,user){
        return state.user = user;
    },

    set_reactor(state,reactor){
        return state.reactor = reactor;
    },

    set_stalk(state,stalk){
        return state.stalk = stalk;
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
    },

    async fetchReactor ({commit, state}) {
        const params =  { id: state.user.id };
        const reactors = await Moralis.Cloud.run("getUserReact",params);
        commit('set_reactor', reactors.results)
    },
    

    async fetchStalkReactor ({commit, state}) {
        const params =  { id: state.stalk.id };
        const reactors = await Moralis.Cloud.run("getUserReact",params);
        commit('set_reactor', reactors.results)
    },


    async makeWall ({state},obj){

        const Wall =  Moralis.Object.extend(TABLE_WALL);
        const wall = new Wall();
        await wall.save({
            providerId: state.user.id ,
            stalkId: state.stalk.id,
            identity: obj.identity == '' ? undefined : obj.identity ,
            reveal: this.obj.reveal,
            context: obj.message
        })
        .then((save) => {
            this.dispatch('snackbar/setSnackbar', {
                text :  "Wall created",
                color : 'success',
            });
        }, (error) => {
            this.dispatch('snackbar/setSnackbar', {
                text :  error.message,
                color : 'error',
            });
        });

    },


    

}
