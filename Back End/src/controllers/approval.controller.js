const approvalService = require("../services/approval.service");

const getPendingVisitors = async (req, res) => {

    try {

        const visitors =
            await approvalService.getPendingVisitors(req.query);

        res.status(200).json({
            success: true,
            data: visitors,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};

const approveVisitor = async (req, res) => {

    try {

        const visitor =
            await approvalService.approveVisitor(
                Number(req.params.id)
            );

        res.status(200).json({
            success: true,
            message: "Visitor approved successfully",
            data: visitor,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};

const rejectVisitor = async (req, res) => {

    try {

        const visitor =
            await approvalService.rejectVisitor(
                Number(req.params.id)
            );

        res.status(200).json({
            success: true,
            message: "Visitor rejected successfully",
            data: visitor,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    getPendingVisitors,
    approveVisitor,
    rejectVisitor,
};