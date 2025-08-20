import path from "path";
import XLSX from "xlsx";

export function readExcel(filepath,sheetName)
{
    const absolutepath = path.resolve(filepath)
    const file = XLSX.readFile(absolutepath)
    const sheet = file.Sheets[sheetName]
    return XLSX.utils.sheet_to_json(sheet)


}