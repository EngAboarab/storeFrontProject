"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = require("../../models/productModel");
const store = new productModel_1.ProductStore();
describe('tesing of the Product model', () => {
    it('it has an index method', () => {
        expect(store.index).toBeDefined;
    });
    it('it has an show method', () => {
        expect(store.show).toBeDefined;
    });
    it('it has an create method', () => {
        expect(store.create).toBeDefined;
    });
    it('the methode index will return a value not null', () => __awaiter(void 0, void 0, void 0, function* () {
        const results = yield store.index();
        expect(results).toEqual([]);
    }));
    it('the methode show will return a value not null', () => __awaiter(void 0, void 0, void 0, function* () {
        const results = yield store.show(1);
        expect(results).not.toBeNull;
    }));
});
