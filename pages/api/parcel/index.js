import { connectToDatabase } from '../../../util/mongodb'
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
    // remove POST testing
  methods: ['GET', 'POST', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async (req, res) => {
    await runMiddleware(req, res, cors);

    const { db } = await connectToDatabase();
    if (req.method === 'POST') {
        // POST create one
        if (req.query !== {}) {
            const parcel = await db
                .collection('parcels')
                .insert({
                    parcelNumber: req.query.parcelNumber,
                    lat: req.query.lat,
                    long: req.query.long,
                    acreage: req.query.acreage,
                    address: req.query.address1,
                    address2: req.query.address2,
                    zipCode: req.query.zipCode,
                    images: req.query.images
                })
                res.json(parcel);
        }
        // POST update one
    
        // POST delete one

    } else {
        // GET all
        const parcels = await db
            .collection('parcels')
            .find({})
            .toArray();
    
        res.json(parcels)
    }
}