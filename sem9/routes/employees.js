const Employee = require("../models/employee");
const router = require("express").Router();
const {Op} = require("sequelize");

router
    .route("/employees")
    .get(async (req, res) => {
        try {
            const employees = await Employee.findAll();
            return res.status(200).json(employees);
        } catch (err) {
            return res.status(500).json(err);
        }
    })
    .post(async (req, res) => {
        try {
            const newEmployee = await Employee.create(req.body);
            return res.status(200).json(newEmployee);
        } catch (err) {
            return res.status(500).json(err);
        }
    })

router
    .route("/employees/:id")
    .get(async (req, res) => {
        try {
            const { minSalary, lastName, sortBy, order } = req.query;
            const where = {};

            if (minSalary) {
                where.salary = { [Op.gt]: minSalary };
            }

            if (lastName) {
                where.lastName = { [Op.like]: `%${lastName}%` };
            }
            const employees = await Employee.findAll( { 
                where,
                order: sortBy ? [[sortBy, order?.toUpperCase() === "DESC" ? "DESC" : "ASC"]] : undefined
            });
            return res.status(200).json(employees);
        } catch (err) {
            return res.status(500).json(err);
        }
    })
    .put(async (req, res) => {
        try {
            const employee = await Employee.findByPk(req.params.id);
            if (employee) {
                const updateEmployee = await employee.update(req.body);
                return res.status(200).json(updateEmployee);
            }
            else {
                return res.status(404).json({ error: "Employee not found." });
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    })
    .delete(async (req, res) => {
        try {
            const employee = await Employee.findByPk(req.params.id);
            if (employee) {
                await employee.destroy();
                res.json( { message: "Employee deleted successfully. "});
            }
            else {
                return res.status(404).json({ error: "Employee not found." });
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    })

module.exports = router;