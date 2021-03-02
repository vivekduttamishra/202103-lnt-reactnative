
let middleware= store=>next=>action=>{

    if(!action.payload || !action.type)
        return next(action);
    
    if(typeof(action.payload)!=='function')
        return next(action)

    let result= action.payload(store.dispatch,store.getState);
    if(result instanceof Promise){
        store.dispatch({type:action.type+"_RESOLVING"});
        store.then(result=>{
            if(result)
                store.dispatch({type:action.type+"_RESOLVED", payload:result});

        }).catch(error=>{
            store.dispatch({type:action.type+"_REJECTED", payload:error});
        });
    }

}