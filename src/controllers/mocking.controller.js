import faker from 'faker';
import productsModel from "../models/products.model.js";

export const generateMockProducts = async (req, res) => {
    try {
        for (let i = 0; i < 50; i++) {
            const productData = {
                title: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                stock: faker.datatype.number({ min: 10, max: 100 }),
                category: faker.commerce.department(),
                status: true,
                code: faker.random.alphaNumeric(10),
                thumbnails: [faker.image.imageUrl()]
            };
            
            const newProduct = await productsModel.create(productData);
            console.log(newProduct)
        }
        res.json({ message: 'Productos de prueba creados exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

// export const generateMockProducts = async (req, res) => {
//     try {
//         for (let i = 0; i < 50; i++) {
//             const productData = {
//                 title: faker.commerce.productName(),
//                 description: faker.commerce.productDescription(),
//                 price: faker.commerce.price(),
//                 stock: faker.datatype.number({ min: 10, max: 100 }),
//                 category: faker.commerce.department(),
//                 status: true,
//                 code: faker.random.alphaNumeric(10),
//                 thumbnails: [faker.image.imageUrl()]
//             };
            
//             const newProduct = await productsModel.create(productData);
//             console.log(newProduct);
//         }
        
//         if (res) {
//             res.json({ message: 'Productos de prueba creados exitosamente' });
//         } else {
//             console.error('Variable "res" no definida en generateMockProducts.');
//         }
//     } catch (error) {
//         console.error('Error en generateMockProducts:', error);
//         if (res) {
//             res.status(500).json({ error: error.message });
//         }
//     }
// };

