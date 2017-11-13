import express from 'express';

import auth from '../controllers/auth';
import productsController from '../controllers/products';

const router = express.Router();

router.get('/api/products', auth.authApi('user'), productsController.getList);
router.get('/api/products/filters', auth.authApi('user'), productsController.getFilters);

export default router;
