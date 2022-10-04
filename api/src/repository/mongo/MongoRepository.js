import { client } from "../../shared/mongoConnect.js";
import { ObjectId } from 'mongodb';

export default class MongoRepository {
    static async create(name, value, available) {
        const item = {
            name,
            value,
            available
        }
        return await client.db('mykafka').collection('products').insertOne(item)
            .then(_ => item)
    }

    static async list() {
        return await client.db().collection('products').find({}).toArray()
            .then(response => response)
    }

    static async put(id, name, value, available) {
        const filters = {};
        if (id) {
            filters._id = {
                $eq: ObjectId(id)
            }
        };

        return await client.db().collection('products').findOneAndUpdate(
            filters,
            {
                $set: {
                    name,
                    value,
                    available
                },

            },
            {
                upsert: true
            }
        )
            .then(response => response)
    }

    static async delete(id) {
        return await client.db().collection('products').deleteOne({ _id: ObjectId(id) })
            .then(response => response)
    }

    static async show(id) {
        return await client.db().collection('products').findOne({ _id: ObjectId(id) })
            .then(response => response)
    }

    static async findByName(name) {
        return await client.db().collection('products').findOne({ name })
            .then(response => response)
    }
}