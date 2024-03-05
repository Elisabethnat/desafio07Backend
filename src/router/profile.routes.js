import { Router } from "express";
import { userModel } from "../models/users.model.js";

const profileRouter = Router();

profileRouter.get('/', (req, res)=> {
    if (req.session.user) {
        
        const userEmail = req.session.user._id;
        userModel.findById(userId, (err, user) => {
          if (err) {
            
            res.redirect('/error');
          } else {
            
            res.render('profile', { user });
          }
        });
      } else {
      
        res.redirect('/login');
      }
});

export default profileRouter;