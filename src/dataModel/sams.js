"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SamsTarget = void 0;
var moment_1 = require("moment");
// Implementation
var SamsTarget = /** @class */ (function () {
    function SamsTarget(id, siteName, location) {
        this.id = id;
        this.siteName = siteName;
        this.location = location;
        this.startDatetime = '';
        this.endDatetime = '';
        this.sams = [];
    }
    SamsTarget.prototype.getRepresentationalSAM = function () {
        return this.sams[0];
    };
    SamsTarget.prototype.addSAM = function (sam) {
        if (!this.sams.length) {
            this.startDatetime = sam.properties.start_datetime;
            this.endDatetime = sam.properties.end_datetime;
        }
        // update startDatetime and endDatetime based on the new sam.
        this.sams.push(sam);
        return;
        var _a = sam.properties, startDate = _a.start_datetime, endDatetime = _a.end_datetime;
        if (!this.startDatetime)
            this.startDatetime = startDate;
        if (!this.endDatetime)
            this.endDatetime = endDatetime;
        var mStartDate = (0, moment_1.default)(startDate);
        var mEndDate = (0, moment_1.default)(endDatetime);
        if (mStartDate.isBefore((0, moment_1.default)(this.startDatetime)))
            this.startDatetime = startDate;
        if (mEndDate.isAfter((0, moment_1.default)(this.endDatetime)))
            this.endDatetime = endDatetime;
        this.startDatetime = startDate;
        this.endDatetime = endDatetime;
    };
    SamsTarget.prototype.getSortedSAMs = function () {
        var sortedSAMS = __spreadArray([], this.sams, true);
        sortedSAMS.sort(function (prev, next) {
            return (0, moment_1.default)(prev.properties.start_datetime).valueOf() -
                (0, moment_1.default)(next.properties.start_datetime).valueOf();
        });
        return sortedSAMS;
    };
    return SamsTarget;
}());
exports.SamsTarget = SamsTarget;
