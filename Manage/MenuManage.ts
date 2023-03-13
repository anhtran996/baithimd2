let readlineSync = require('readline-sync');
import {HoneyManage} from "./HoneyManage";

export class MenuManage {
    static menu() {
        while (true) {
            console.log(`------------MENU----------------
    1.hien thi ng yeu
    2.tim kiem theo ten ng yeu 
    3.them moi 1 ng yeu
    4.chinh sua thong tin ng yeu
    5.xoa ng yeu
    6.exit`)
            let option1 = +readlineSync.question("nhap lua chon(1-6): ")
            switch (option1) {
                case 1:
                    HoneyManage.disPlay();
                    break;
                case 2:
                    HoneyManage.findByName()
                    break;
                case 3:
                    HoneyManage.addHoney();
                    break;
                case 4:
                    HoneyManage.editInfo();
                    break
                case 5:
                    HoneyManage.remove();
                    break
                case 6:
                    return;
                default:
                    console.log(`khong co lua chon, nhap lai`);
                    continue
            }
        }
    }
}

