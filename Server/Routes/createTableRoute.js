import express from 'express';
import createTable from "../Controller/createTable";

let createRoute = express.Router();


createRoute.get('/create',createTable)