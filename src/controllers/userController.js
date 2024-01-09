import User from "../models/userModel";

const inscription = async (req, res) => {
  try {
    let newUser = await new User();
    newUser.email = req.body.email;
    newUser.password = await newUser.encryptPassword(req.body.password);
    newUser.save();
    res.send(newUser);
  } catch (error) {
    res.send(error);
  }
};

const connexion = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid");

    const validPassword = await user.validPassword(
      req.body.password,
      user.password
    );
    if (!validPassword) throw new Error("Invalid password");

    res.json({ user, message: "Vous êtes connécté" });
  } catch (error) {}
};

export { inscription, connexion };
