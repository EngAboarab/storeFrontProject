

import { User,UserStore } from "../../models/userModel";


const store=new UserStore()
const firstName="Moahmed";
const lastName="Aboarab";
const password="password"
const id=1;

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
    it('it has an update method',()=>{
        expect(store.update).toBeDefined

    })

    it ('the methode create will return a value not null',async()=>{
        const results= await store.create(firstName,lastName,password);
        expect(results).not.toBeNull
    })
    it ('the methode update will return a value not null',async()=>{
        const results= await store.update(firstName,lastName,id);
        expect(results).not.toBeNull
    })
    it ('the methode index will return a value not null',async()=>{
        const results= await store.index();
        expect(results).not.toBeNull
    })
    it ('the methode show will return a value not null',async()=>{
        const results= await store.show(id);
        expect(results).not.toBeNull
    })
})