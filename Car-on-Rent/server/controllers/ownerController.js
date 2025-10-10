import User from "../models/User.js";


//  Change Role 
export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { role: "owner" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
