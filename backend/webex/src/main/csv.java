package excel;

import java.nio.charset.Charset;

import com.spire.xls.Workbook;
import com.spire.xls.Worksheet;

public class App {

	public static void main(String[] args) {
		Workbook wb = new Workbook();
		String path = "D:\\tmp\\java\\excel\\aaa.xlsm";
		String dstpath = "D:\\tmp\\java\\excel\\aaa.csv";
		wb.loadFromFile(path);
		Worksheet sheet = wb.getWorksheets().get(0);
		sheet.saveToFile(dstpath,",", Charset.forName("UTF-8"));
		System.out.println("end");
	}

}
