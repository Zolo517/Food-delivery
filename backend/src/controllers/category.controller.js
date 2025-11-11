import { FoodCategory } from "../models/category.model.js";

export const createFoodCategory = async (req, res) => {
  try {
    const data = await FoodCategory.create({
      categoryName: req.body.categoryName,
    });
    res.status(200).send({ message: "successfully", data: data });
  } catch (error) {
    console.error(error);
  }
};

export const getfoodCategories = async (req, res) => {
  try {
    const data = await FoodCategory.aggregate([
      {
        $lookup:
          /**
           * from: The target collection.
           * localField: The local join field.
           * foreignField: The target join field.
           * as: The name for the results.
           * pipeline: Optional pipeline to run on the foreign collection.
           * let: Optional variables to use in the pipeline field stages.
           */
          {
            from: "foods",
            localField: "_id",
            foreignField: "category",
            as: "foods",
          },
      },
    ]);
    res.send(data);
  } catch (error) {
    console.error(error);
  }
};

export const updateCategoryName = async (req, res) => {
  const { id } = req.params;

  try {
    const categoryName = req.body;
    const data = await FoodCategory.findByIdAndUpdate(id, categoryName);
    res.status(200).send(data);
  } catch (error) {
    console.error(error, "error");
  }
};

export const deletefoodCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await FoodCategory.findByIdAndDelete(id);
    res.status(200).send({ message: "deleted successfully", data: data });
  } catch (error) {
    console.error(error, "error");
  }
};
