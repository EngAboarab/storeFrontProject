import { Product,ProductStore } from "../../models/productModel";


const store=new ProductStore()
const userId=1;
const product_id=1;
const product_name="train";
const price=200;
const category="toy"
const id=1;

describe('tesing of the Product model',()=>{
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
        const results= await store.create(product_name,price,category);
        expect(results).not.toBeNull
    })
    it ('the methode update will return a value not null',async()=>{
        const results= await store.update(product_name,price,category,id);
        expect(results).not.toBeNull
    })
    it ('the methode index will return a value not null',async()=>{
        const results= await store.index();
        expect(results).not.toBeNull
    })
    it ('the methode show will return a value not null',async()=>{
        const results= await store.show(product_id);
        expect(results).not.toBeNull
    })
})