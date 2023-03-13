"use strict";
exports.__esModule = true;
exports.HoneyManage = void 0;
var readlineSync = require('readline-sync');
var Honey_1 = require("../Model/Honey");
var HoneyManage = /** @class */ (function () {
    function HoneyManage() {
    }
    HoneyManage.optionZoliac = function () {
        while (true) {
            console.log("----------chon cung hoang dao-----------------\n             1. Thien binh\n             2. Bach duong\n             3. Kim nguu\n             4. Nhan ma\n             5. Cu giai");
            var zodiac = +readlineSync.question("nhap cung hoang dao: ");
            switch (zodiac) {
                case 1:
                    return "Thiên bình";
                    break;
                case 2:
                    return "bạch dương";
                    break;
                case 3:
                    return "Kim ngưu";
                    break;
                case 4:
                    return "nhân mã";
                    break;
                case 5:
                    return "cự giải";
                    break;
                default:
                    console.log("not option, nhập lại:");
                    continue;
            }
        }
    };
    HoneyManage.addHoney = function () {
        var id = +readlineSync.question("nhap id: ");
        var name = readlineSync.question("nhap ten: ");
        var zoliac = this.optionZoliac();
        var address = readlineSync.question("nhap dia chi: ");
        var yearOfBrith = +readlineSync.question("nhap nam sinh: ");
        var interest = readlineSync.question("nhap so thich: ");
        var isIdExist;
        for (var _i = 0, _a = this.listInfo; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.id == id) {
                isIdExist = true;
                break;
            }
        }
        if (isIdExist) {
            console.log("id da co, nhap id khac");
        }
        else {
            var newListInfo = new Honey_1.Honey(id, name, zoliac, address, yearOfBrith, interest);
            this.listInfo.push(newListInfo);
            console.table(this.listInfo);
        }
    };
    HoneyManage.disPlay = function () {
        for (var i = 1; i < this.listInfo.length; i++) {
            if (i < this.listInfo.length) {
                console.log("khong co de hien thi");
                return;
            }
            else {
                console.table(this.listInfo);
                return;
            }
        }
    };
    HoneyManage.checkID = function () {
        while (true) {
            var ID = readlineSync.question("enter by find ID: ");
            for (var i = 0; i < this.listInfo.length; i++) {
                if (ID == this.listInfo[i].id) {
                    return ID;
                }
            }
            console.log("not ID, enter again");
            continue;
        }
    };
    HoneyManage.findByName = function () {
        var nameFind = readlineSync.question("Nhap vao day: ");
        for (var _i = 0, _a = this.listInfo; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.name.toLowerCase().includes(nameFind.toLowerCase())) {
                console.table(i);
            }
        }
    };
    HoneyManage.editInfo = function () {
        var ID = this.checkID();
        for (var _i = 0, _a = this.listInfo; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.id == ID) {
                i.name = readlineSync.question("edit name: ");
                i.zodiac = this.optionZoliac();
                i.address = readlineSync.question("edit address: ");
                i.yearOfBirth = readlineSync.question("edit status: ");
                i.interest = readlineSync.question("edit type: ");
            }
        }
        console.table(this.listInfo);
    };
    HoneyManage.remove = function () {
        var ID = this.checkID();
        for (var i = 0; i < this.listInfo.length; i++) {
            if (this.listInfo[i].id == ID) {
                this.listInfo.splice(i, 1);
            }
        }
        console.log(this.listInfo);
    };
    HoneyManage.listInfo = [];
    return HoneyManage;
}());
exports.HoneyManage = HoneyManage;
