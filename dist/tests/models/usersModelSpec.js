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
const userModel_1 = require("../../models/userModel");
const store = new userModel_1.UserStore();
const firstName = "Moahmed";
const lastName = "Aboarab";
const password = "password";
const id = 1;
describe('tesing of the user model', () => {
    it('it has an index method', () => {
        expect(store.index).toBeDefined;
    });
    it('it has an show method', () => {
        expect(store.show).toBeDefined;
    });
    it('it has an create method', () => {
        expect(store.create).toBeDefined;
    });
    it('it has an update method', () => {
        expect(store.update).toBeDefined;
    });
    it('the methode create will return a value not null', () => __awaiter(void 0, void 0, void 0, function* () {
        const results = yield store.create(firstName, lastName, password);
        expect(results).not.toBeNull;
    }));
    it('the methode update will return a value not null', () => __awaiter(void 0, void 0, void 0, function* () {
        const results = yield store.update(firstName, lastName, id);
        expect(results).not.toBeNull;
    }));
    it('the methode index will return a value not null', () => __awaiter(void 0, void 0, void 0, function* () {
        const results = yield store.index();
        expect(results).not.toBeNull;
    }));
    it('the methode show will return a value not null', () => __awaiter(void 0, void 0, void 0, function* () {
        const results = yield store.show(id);
        expect(results).not.toBeNull;
    }));
});
