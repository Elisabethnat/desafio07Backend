import { Router } from 'express';
import cartsController from '../controllers/carts.controller.js';
import { authorization, passportError } from '../utils/messageErrors.js';

const cartRouter = Router();
cartRouter.get('/', cartsController.getCarts);
cartRouter.get('/:cid', cartsController.getCart);
cartRouter.post('/', cartsController.postCart);
cartRouter.post('/:cid/purchase', passportError('jwt'), authorization('user'), cartsController.purchaseCart);
cartRouter.put('/:cid/products/:pid', passportError('jwt'), authorization('user'),cartsController.putProductsToCart);
cartRouter.put('/:cid', passportError('jwt'), authorization('user'),cartsController.updateProductToCart);
cartRouter.delete('/:cid/product/:pid', passportError('jwt'), authorization('user'),cartsController.deleteProductCart);
cartRouter.delete('/:id', passportError('jwt'), authorization('user'),cartsController.deleteProductsCart);

export default cartRouter;

