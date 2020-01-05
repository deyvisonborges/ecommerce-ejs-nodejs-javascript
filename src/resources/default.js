'use strict'

const mongoose = require('mongoose');

class Default {
    constructor(model) {
        this._model = mongoose.model(model);
    } 
    static async create(data) {
        return await new this._model(data).save();
    }
    
    async getAll() {
        return this._model.find();
    }

    static async getById(id) {
        return model.findOne(
            {
                _id: id
            }
        );
    }

    static async update(id, data) {
        return await model.findOneAndReplace(
            id, { 
                $set: data 
            }
        );
    }

    static async delete(id) {
        return await model.findOneAndRemove(id);
    }
}