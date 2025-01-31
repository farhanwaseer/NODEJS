import Case from "../models/Case.js";

// Create a new case
export const createCase = async (req, res) => {
  const { title, description, budget } = req.body;

  try {
    const newCase = new Case({ clientId: req.user._id, title, description, budget });
    await newCase.save();
    res.status(201).json(newCase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all cases
export const getCases = async (req, res) => {
  try {
    const cases = await Case.find().populate("clientId", "name email");
    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single case by ID
export const getCaseById = async (req, res) => {
  try {
    const caseItem = await Case.findById(req.params.id).populate("clientId", "name email");
    if (caseItem) res.json(caseItem);
    else res.status(404).json({ message: "Case not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
