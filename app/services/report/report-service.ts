import { ReportDataModel } from "../../models/entities/report/reportdata-model";

export class ReportService {
    private reportData : Array<ReportDataModel> = [];

    constructor(){
    }

    public showReportData() : void {
        console.table(this.reportData);
    }
}