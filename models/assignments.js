const sequelize = require("./index.js");
const Sequelize = require("sequelize");

const Assignment = sequelize.define(
  "assignments",
  {
    aid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allownull: false,
    },
    points: {
      type: Sequelize.INTEGER,
      allownull: false,
      validate: {
        isInt: true,
        min: 1,
        max: 100,
      },
    },
    num_of_attempts: {
      type: Sequelize.INTEGER,
      allownull: false,
      validate: {
        isInt: true,
        min: 1,
        max: 100,
      },
    },
    deadline: {
      type: Sequelize.STRING,
      allownull: false,
    },
    asignment_created: {
      type: Sequelize.DATE,
    },
    assignment_updated: {
      type: Sequelize.DATE,
    },
  },
  {
    createdAt: "asignment_created",
    updatedAt: "assignment_updated",
  }
);

module.exports = Assignment;