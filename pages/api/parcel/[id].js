import { connectToDatabase } from '../../../util/mongodb'
import { ObjectID } from 'mongodb'

export default async (req, res) => {
    const {
        query: { id },
    } = req

    const { db } = await connectToDatabase();
    
    const parcel = await db
        .collection('parcels')
        .findOne(new ObjectID(id))
        
    res.json(JSON.parse(JSON.stringify(parcel)))
}

