export default function(context) {
  console.log("[Middleware] Check Auth");
  if (process.client) {
    context.store.dispatch("initAuth");
  }
}
/*
const store=()=>{
  return new Vuex.Store({
    state:{
      posts:[],
      token:null
    },

    mutations:{
      add(state,payload){
        state.posts.push(payload);
      },
      edit(state,payload){
        state.posts.map(i=>i.id==payload.id?payload:i)
      }
    },
    
    actions:{
      nuxtServerInit(Vuecontext,context){
        
      },

      async addPost(context,payload){
        const res=await axios.post('',payload);
        context.commit('add',payload)
      },

      async editPost(context,payload){
        const res=await axios.pit(`/${payload.id}`,payload);
        context.commit('add',payload)
      }
    },

    getters:{
      isAuth(state){
        return state.token!=null;
      }
    },
  })
}

*/