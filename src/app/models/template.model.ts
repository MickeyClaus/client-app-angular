export class Template {
    fileDesc: string;
    isActive: boolean;
    isClassRelated: boolean;
    fileId: number;
    reportTerm:  number;
    marketType:  any;
    tempFile:  any;
    productType:  any;

    constructor(tp: any) {
        this.fileDesc = tp.fileDesc;
        this.isActive = tp.isActive;
        this.isClassRelated = tp.isClassRelated;
        this.fileId = tp.fileId;
        this.reportTerm = tp.reportTerm;
        this.marketType = tp.marketType;
        this.tempFile = tp.tempFile;
        this.productType = tp.productType;
    }
}