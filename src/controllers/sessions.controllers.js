import { generateToken } from "../utils/jwt.js";
const postSessions = async (req, res) => {
    try {
        if (!req.user) {
            res.status(401).send({mensaje: "Invalidate user"});
        } 
        // //creo la session
        // req.session.user = {
        //     first_name : req.user.first_name,
        //     last_name : req.user.last_name,
        //     age: req.user.age,
        //     email: req.user.email
        // };
        
        const token = generateToken(req.user); 
        res.cookie('jwtCookie', token, {
          maxAge: 43200000 
        });
        res.status(200).send ({token}); 
      } catch (error) {
        res.status(500).send({mensaje: `Error al inicializar sesion ${error}`});
      };
};

//controllador de registro
const registerPost = async (req,res) => {
  try {
      if (!req.user) {
          return res.status(400).send({mensaje:`Usuario ya existente`});
      }
      return res.status(200).send({mensaje: "Usuario Creado"});
  } catch (error) {
      res.status(500).send({mensaje: `Error al crear usuario ${error}`});
  };
}


const getCurrentSessions = async (req, res) => {
  res.status(200).send(req.user);   
};

const getGithubCreateUser = async (req, res) => {
    res.status(200).send({mensaje: "Usuario Creado"});
};

const getGithubSessions = async (req, res) => {
    req.session.user = req.user
    res.status(200).send({mensaje: "Session created"});
};

const getLogout = async (req, res) => {
    if (req.session.user) {
        try {
          req.session.destroy()
          res.clearCookie('jwtCookie');
          res.status(200).send({ resultado: 'Has cerrado sesion' })
        
        }
        catch (error) {
          res.status(400).send({ error: `Error al cerrar sesion: ${error}` });
        }
      } else {
        res.status(400).send({ error: `No hay sesion iniciada` });
      };
};

const sessionController = {
    postSessions,
    getCurrentSessions,
    getGithubCreateUser,
    getGithubSessions,
    getLogout,
    registerPost,
};

export default sessionController;

