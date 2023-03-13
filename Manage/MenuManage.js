"use strict";
exports.__esModule = true;
exports.MenuManage = void 0;
var readlineSync = require('readline-sync');
var HoneyManage_1 = require("./HoneyManage");
var MenuManage = /** @class */ (function () {
    function MenuManage() {
    }
    MenuManage.menu = function () {
        while (true) {
            console.log("------------MENU----------------\n    1.hien thi ng yeu\n    2.tim kiem theo ten ng yeu \n    3.them moi 1 ng yeu\n    4.chinh sua thong tin ng yeu\n    5.xoa ng yeu\n    6.exit");
            var option1 = +readlineSync.question("nhap lua chon(1-6): ");
            switch (option1) {
                case 1:
                    HoneyManage_1.HoneyManage.disPlay();
                    break;
                case 2:
                    HoneyManage_1.HoneyManage.findByName();
                    break;
                case 3:
                    HoneyManage_1.HoneyManage.addHoney();
                    break;
                case 4:
                    HoneyManage_1.HoneyManage.editInfo();
                    break;
                case 5:
                    HoneyManage_1.HoneyManage.remove();
                    break;
                case 6:
                    return;
                default:
                    console.log("khong co lua chon, nhap lai");
                    continue;
            }
        }
    };
    return MenuManage;
}());
exports.MenuManage = MenuManage;
