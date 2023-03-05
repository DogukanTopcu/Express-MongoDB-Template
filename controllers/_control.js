import _models from "../models/_model.js";

export const get = async (req, res) => {
    try {
        const _Models = await _models.find();
        res.status(200).json(_Models.reverse());
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}