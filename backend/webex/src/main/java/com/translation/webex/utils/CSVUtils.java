package com.translation.webex.utils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.translation.webex.entity.Translation;

public class CSVUtils {

	private static final String CSV_COLUMN_SEPARATOR = ",";
	private static final String CSV_RN = "\r\n";
	
	public static void doExport(List<Translation> dataList,String colNames,OutputStream os) {
		try {
			
			String[] colNamesArr = null;
			
			colNamesArr = colNames.split(",");
//			for(String aColNamesArr: colNamesArr) {
//				buf.append(aColNamesArr).append(CSV_COLUMN_SEPARATOR);
//			}
			StringBuilder buf = new StringBuilder();
			buf.append("Segment").append(CSV_COLUMN_SEPARATOR);
			buf.append("Accuracy").append(CSV_COLUMN_SEPARATOR);
			buf.append("EnglishPhrase").append(CSV_COLUMN_SEPARATOR);
			buf.append("Translation").append(CSV_RN);
			
			for(Translation t:dataList) {
				buf.append(t.getSegment()).append(CSV_COLUMN_SEPARATOR);
				buf.append(t.getAccuracy()).append(CSV_COLUMN_SEPARATOR);
				buf.append(t.getEnglishPhrase()).append(CSV_COLUMN_SEPARATOR);
				buf.append(t.getTranslation()).append(CSV_RN);
			}
		}catch(Exception ex) {
			
		}
	}
	public static void xlsxToCsv(InputStream inputFile, File outputFile) {
        StringBuffer data = new StringBuffer();
        try {
            FileOutputStream fos = new FileOutputStream(outputFile);
            XSSFWorkbook wBook = new XSSFWorkbook(inputFile);
            XSSFSheet sheet = wBook.getSheetAt(0);
            Row row;
            Cell cell;
          
            Iterator<Row> rowIterator = sheet.iterator();

            while (rowIterator.hasNext()) {
                row = rowIterator.next();
                Iterator<Cell> cellIterator = row.cellIterator();
                while (cellIterator.hasNext()) {
                    cell = cellIterator.next();
                    switch (cell.getCellType()) {
                        case BOOLEAN:
                            data.append(cell.getBooleanCellValue() + ",");
                            break;
                        case NUMERIC:
                            data.append(cell.getNumericCellValue() + ",");
                            break;
                        case STRING:
                            data.append(cell.getStringCellValue() + ",");
                            break;
                        case BLANK:
                            data.append("" + ",");
                            break;
                        default:
                            data.append(cell + ",");
                    }
                }
                data.append("\r\n");
            }

            fos.write(data.toString().getBytes());
            fos.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}


