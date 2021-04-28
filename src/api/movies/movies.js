import express from 'express';
import { MovieService } from './movies.service.js';
import { asyncHandler } from '../../util/asyncHandler.js';

export const movieRouter = express.Router();

movieRouter.get(
    `/`,
    asyncHandler(async (req, res, next) => {
        let movies = await MovieService.getAllMovies();
        res.json(movies);
    }),
);

movieRouter.get(
    `/featured/:num`,
    asyncHandler(async (req, res, next) => {
        const { num } = req.params;
        const movies = await MovieService.getFeaturedMovies(num);
        res.json(movies);
    }),
);

movieRouter.post(
    `/insert`,
    asyncHandler(async (req, res) => {
        await MovieService.insertMovies();
        res.send('Insert completed');
    }),
);
