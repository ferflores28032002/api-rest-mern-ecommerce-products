import { productosModel } from "../models/products.models.js"
import { uploadImage } from "../helpers/cloudinary.js"


export const addImagenes = async (req, res) => {

    const { name, description, category, price, image } = req.body

    try {

    
        const results = await uploadImage(image);

        const { public_id, secure_url } = results;

        const producto = await productosModel.create({

            name, 
            description,
            category,
            price,
            image_id: public_id, 
            image_logo: secure_url
            
            
        })

        res.status(200).json({
            msg: "Producto creado exitosamente",
            producto
        })

    } catch (error) {
        console.log(error)
    }
}

export const addImagenProducts = async (req, res) => {

    const { image } = req.body;
    const { id } = req.params;

    try {
        
        const producto = await productosModel.findOne({ _id: id })

        
        if(producto) {

            const results = await uploadImage(image);
    
            const { public_id, secure_url } = results;

            producto.imagenes.push({

                id: public_id,
                url: secure_url

            })
            await producto.save()  //Guardamos el producto

            res.json({
                msg: `¡imagen del producto ${producto.name} añadida!`
            })
        }else {

            return res.status(404).json({
                msg: "¡No existe un producto con ese id!"
            })
        }


    } catch (error) {
        console.log(error)
    }
}


export const loadProductos = async (req, res) => {

    try {
        
        const productos = await productosModel.find()

        res.json({
            productos
        })

    } catch (error) {
        console.log(error)
    }



}

export const loadProductsForId = async (req, res) => {

    const { id } = req.params

    try {
        
        const product = await productosModel.findById({ _id:id })


        if(product) {
            return res.json({
                product
            })
        }else {
            return res.status(404).json({
                msg: "Producto no encontrado con el id" + id
            })
        }

    } catch (error) {
        console.log(error)
    }
}

