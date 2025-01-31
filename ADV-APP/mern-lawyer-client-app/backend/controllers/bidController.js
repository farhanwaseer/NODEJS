import Bid from "../models/Bid.js";

// Place a bid
export const placeBid = async (req, res) => {
  const { amount } = req.body;

  try {
    const newBid = new Bid({ caseId: req.params.caseId, lawyerId: req.user._id, amount });
    await newBid.save();
    res.status(201).json(newBid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Bid Controller (`bidController.js`)
export const getBidsForCase = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const bids = await Bid.find({ caseId: req.params.caseId })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("lawyerId", "name specialization");

    res.json(bids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

