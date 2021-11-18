const Users = require('../models/users');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// User CRUD management
exports.signup = async function(req,res){
    try {   
      const passHash = await bcrypt.hash(req.body.password, 10);
      const users = await Users({
        email: req.body.email,
        password: passHash,
      });
      await users.save();
      res.status(201).sendFile(path.join(__dirname+'/../../public/html/connect.html'));
    
    } catch (error) {
      res.status(403).send('Une erreur est survenue !');
    }
}

exports.login = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if(!user) return res.status(401).json({ error: 'Mot de passe ou identifiant incorrect !'});
    console.log(req.body.password);
    console.log(user.password);
    const motDePasse = await bcrypt.compare(req.body.password, user.password);
    if(motDePasse === false) return res.status(401).json({ error: 'Mot de passe ou identifiant incorrect !'});
    res.status(200).json({
      userId: user._id,
      token: jwt.sign(
        { userId: user._id },
        'RANDOM_TOKEN_SECRET',
        { expiresIn: '24h' }
      )
    })
  } catch (error) {
    console.trace(error);
    res.status(500).json({ error });
  }
}

// exports.getOneUser = async (req,res) => {
//     try {
//         const users = await Users.findOne({_id: req.params.id})
//     } catch {

//     }
// }
