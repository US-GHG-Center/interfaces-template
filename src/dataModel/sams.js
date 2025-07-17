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
    function SamsTarget(id, siteName, location, sam) {
        this.id = id;
        this.siteName = siteName;
        this.location = location;
        this.startDate = '';
        this.endDate = '';
        this.sams = [];
        this.addSAM(sam);
    }
    SamsTarget.prototype.getRepresentationalSAM = function () {
        return this.sams[0];
    };
    SamsTarget.prototype.addSAM = function (sam) {
        // update startDate and endDate based on the new sam.
        var _a = sam.properties, startDate = _a.start_date, endDate = _a.end_date;
        if (!this.startDate)
            this.startDate = startDate;
        if (!this.endDate)
            this.endDate = endDate;
        // let mStartDate = moment(startDate);
        // let mEndDate = moment(endDate);
        // // check if the current sam start/end datetime is different than the one in the
        // if (mStartDate.isBefore(moment(this.startDate))) this.startDate = startDate;
        // if (mEndDate.isAfter(moment(this.endDate))) this.endDate = endDate;
        this.startDate = startDate;
        this.endDate = endDate;
    };
    SamsTarget.prototype.getSortedSAMs = function () {
        var sortedSAMS = __spreadArray([], this.sams, true);
        sortedSAMS.sort(function (prev, next) {
            return (0, moment_1.default)(prev.properties.start_date).valueOf() -
                (0, moment_1.default)(next.properties.start_date).valueOf();
        });
        return sortedSAMS;
    };
    return SamsTarget;
}());
exports.SamsTarget = SamsTarget;
