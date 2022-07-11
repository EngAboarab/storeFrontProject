

import { User,UserStore } from "../../models/userModel";


const store=new UserStore()

describe('tesing of the user model',()=>{
    it('it has an index method',()=>{
        expect(store.index).toBeDefined

    })
    it('it has an show method',()=>{
        expect(store.show).toBeDefined

    })
    it('it has an create method',()=>{
        expect(store.create).toBeDefined

    })

    it ('the methode index will return a value not null',async()=>{
        const results= await store.index();
        expect(results).toEqual([])
    })
    it ('the methode show will return a value not null',async()=>{
        const results= await store.show(1);
        expect(results).not.toBeNull
    })
})