import { connectToDb } from "../../../lib/connectToDb"; // Pfad zu deiner Datenbankverbindungslogik
import {Product} from '../../../lib/models'; // Pfad zum Mongoose-Modell

export default async function handler(req:any, res:any) {
    const { id } = req. query

  await connectToDb();


    if(req.method === 'DELETE') {
        try {
            const deletedProduct = await Product.findByIdAndDelete(id);
            if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
            }
            // Nach dem Löschen kannst du einen Revalidation-Request senden, falls benötigt
            // Beispiel: await res.unstable_revalidate('/path-to-revalidate');
            return res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error:any) {
            return res.status(500).json({ error: error.message });
        }
    }
}