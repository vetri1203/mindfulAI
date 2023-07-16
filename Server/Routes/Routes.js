import express from 'express';

import {login} from '../Component/Login.js'
import { signup } from '../Component/Singup.js';
import { recruitment } from '../Component/Recruitment.js';
import { seeker } from '../Component/jobbSeeker.js';
import { scholarship } from '../Component/ScholarshipPost.js';
import {apply}  from '../Component/ScholarshipApply.js';
import { search } from '../Component/Search.js';

const Routes = express.Router();
Routes.get('/login',login);
Routes.post('/signup',signup);
Routes.post('/post',recruitment);
Routes.post('/apply',seeker);
Routes.post('/post/scholarship',scholarship);
Routes.post('apply/scholarship',apply);
Routes.post('/search',search);


export default Routes;