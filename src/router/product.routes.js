import { Router } from 'express';
import productsController from '../controllers/product.controller.js';
import { passportError, authorization } from '../utils/messageErrors.js';
import { generateMockProducts } from '../controllers/mockingController.js';


const productRouter = Router();
productRouter.get('/', productsController.getProducts);
productRouter.get('/:pid', productsController.getProduct);
productRouter.get('/mockingproducts', passportError('jwt'), authorization('Admin'), generateMockProducts)
productRouter.post('/', passportError('jwt'), authorization('Admin'), productsController.postProduct);
productRouter.put('/:pid', passportError('jwt'), authorization('Admin'), productsController.putProduct);
productRouter.delete('/:pid', passportError('jwt'), authorization('Admin'), productsController.deleteProduct);

export default productRouter;
