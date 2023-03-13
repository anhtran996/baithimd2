let readlineSync = require('readline-sync');
import {Honey} from "../Model/Honey";

export class HoneyManage {
    static listInfo: Honey[] = [];

    static optionZoliac() {
        while (true) {
            console.log(`----------chon cung hoang dao-----------------
             1. Thien binh
             2. Bach duong
             3. Kim nguu
             4. Nhan ma
             5. Cu giai`)
            let zodiac = +readlineSync.question("nhap cung hoang dao: ")
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
                default :
                    console.log("not option, nhập lại:");
                    continue;
            }
        }
    }

    static addHoney() {
        let id = +readlineSync.question("nhap id: ");
        let name = readlineSync.question("nhap ten: ");
        let zoliac = this.optionZoliac()
        let address = readlineSync.question("nhap dia chi: ");
        let yearOfBrith = +readlineSync.question("nhap nam sinh: ");
        let interest = readlineSync.question("nhap so thich: ");
        let isIdExist: boolean;
        for (let i of this.listInfo) {
            if (i.id == id) {
                isIdExist = true;
                break;
            }
        }
        if (isIdExist) {
            console.log(`id da co, nhap id khac`)
        } else {
            let newListInfo = new Honey(id, name, zoliac, address, yearOfBrith, interest);
            this.listInfo.push(newListInfo);
            console.table(this.listInfo);
        }
    }

    static disPlay() {
        for (let i = 1; i < this.listInfo.length; i++) {
            if (i < this.listInfo.length) {
                console.log("khong co de hien thi");
                return
            } else {
                console.table(this.listInfo);
                return;
            }
        }
    }

    static checkID(): number {
        while (true) {
            let ID = readlineSync.question("enter by find ID: ");
            for (let i = 0; i < this.listInfo.length; i++) {
                if (ID == this.listInfo[i].id) {
                    return ID
                }
            }
            console.log("not ID, enter again");
            continue
        }
    }

    static findByName() {
        let nameFind = readlineSync.question(`Nhap vao day: `)
        for(let i of this.listInfo){
            if(i.name.toLowerCase().includes(nameFind.toLowerCase())){
                console.table(i)
            }
        }
    }
    static editInfo() {
        let ID: number = this.checkID()
        for (let i of this.listInfo) {
            if (i.id == ID) {
                i.name = readlineSync.question("edit name: ")
                i.zodiac = this.optionZoliac()
                i.address = readlineSync.question("edit address: ")
                i.yearOfBirth = readlineSync.question("edit status: ")
                i.interest = readlineSync.question("edit type: ")
            }
        }
        console.table(this.listInfo)
    }

    static remove() {
        let ID: number = this.checkID()
        for (let i = 0; i < this.listInfo.length; i++) {
            if (this.listInfo[i].id == ID) {
                this.listInfo.splice(i, 1)
            }
        }
        console.log(this.listInfo)
    }

}