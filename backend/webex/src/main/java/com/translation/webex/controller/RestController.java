package com.translation.webex.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.translation.webex.comp.TranslationReadWrapper;
import com.translation.webex.dao.TranslationDao;
import com.translation.webex.dao.VoteDao;
import com.translation.webex.entity.Translation;
import com.translation.webex.entity.Vote;
import com.translation.webex.utils.CSVUtils;

import jakarta.servlet.http.HttpServletResponse;


@org.springframework.web.bind.annotation.RestController
public class RestController {
	
	String folder = "C:\\Users\\Ameen\\Downloads";
//			"/usr/local/tmp/";
	
	private static final String CSV_COLUMN_SEPARATOR = ",";
	private static final String CSV_RN = "\r\n";

	@Autowired
	private TranslationDao translationDao;
	@Autowired
	private VoteDao voteDao;
	
	@Autowired
	TranslationReadWrapper translationReadWrapper;
	
	@GetMapping(value = "helloworld")
	public Object helloworld() {
		Map<String,Object> ret = new HashMap();
			ret.put("code", 200);
			ret.put("oper","hello world您好");
		return ret;
	}
	@PostMapping(value="convert")
	public Object convert(@RequestParam("file")MultipartFile file) {
		
		Map<String,Object> ret = new HashMap();
			ret.put("code", 200);
			ret.put("oper","convert");
		try {
			String filename = folder + new Date().getTime() + ".csv";
			File csvfile = new File(filename);
			CSVUtils.xlsxToCsv(file.getInputStream(), csvfile);
		}catch(Exception ex) {
			ex.printStackTrace();
		}
		return ret;
	}
	@PostMapping(value="add")
	public Object add(@RequestParam("segment")Integer segment,
			@RequestParam("accuracy")Integer accuracy,
			@RequestParam("englishPhrase")String englishPhrase,
			@RequestParam("translation")String translation) {
		
		Map<String,Object> ret = new HashMap();
		Translation t = new Translation();
		 	t.setSegment(segment);
		 	t.setAccuracy(accuracy);
		    t.setEnglishPhrase(englishPhrase);
		    t.setTranslation(translation);
		    translationDao.save(t);	
		    
		ret.put("code", 200);
		ret.put("oper","add");
		return ret;
	}
	@PostMapping(value="translate")
	public Object translate(@RequestParam("englishPhrase")String englishPhrase) {
		Map<String,Object> ret = new HashMap();
		
		Translation res = translationReadWrapper.queryByEnglish(englishPhrase);
		if(res != null) {
			ret.put("data", res);
		}
		ret.put("code", 200);
		ret.put("oper","translate");
		return ret;
	}
	
	@GetMapping(value="export")
	public void exp(HttpServletResponse response) {
		OutputStream out = null;
		
		List<Translation> dataList = translationDao.findAll();
		
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
		
		try {
			out = response.getOutputStream();
			response.reset();
			response.setContentType("application/x-download");
			response.setHeader("Content-Disposition", "attachment;filename=data.csv");
			out.write(buf.toString().getBytes());
			out.flush();
		}catch(Exception ex) {
			ex.printStackTrace();
		}finally {
			if(out != null)
				try {
					out.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		}
	}
	@PostMapping(value="import")
	public Object imp(@RequestParam("file")MultipartFile file) {
		
		String type = file.getContentType();
		Map<String,Object> ret = new HashMap();
		ret.put("oper","import");
		if(!"text/csv".equals(type)) {
			ret.put("code", 500);
			ret.put("msg", "file type is error!");
			return ret;
		}
		String filename = folder + new Date().getTime() + ".csv";
		File localFile = new File(filename);
		try {
			file.transferTo(localFile);
			InputStream input = new FileInputStream(localFile);
			BufferedReader reader = new BufferedReader(new InputStreamReader(input,"utf-8"));
			String line =null;
			int i=1;
			while((line = reader.readLine())!=null){ 
				if(i++ == 1)continue;
				System.out.println(line);
				String[] data = line.split(",",-1);
				if(data[0] == null || data[0].trim().length() == 0)continue;
				if(data[3] == null || data[3].trim().length() == 0)continue;
				Translation t = new Translation();
						    t.setSegment(Integer.valueOf(data[0]));
				if(data[3] != null || data[3].trim().length() > 0)		    
					t.setAccuracy(Integer.valueOf(data[1]));
						    t.setEnglishPhrase(data[3]);
						    t.setTranslation(data[4]);
						    translationDao.save(t);		
			}
			ret.put("num", i);
			ret.put("code", 200);
		}catch(Exception ex) {
			ex.printStackTrace();
			ret.put("code", 501);
			ret.put("msg", ex.getMessage());
		}
		return ret;
	}
	
	@PostMapping(value="vote")
	public Object vote(@RequestParam("segment")Integer segment,
			@RequestParam("language")String language,
			@RequestParam("amountOfVotes")Integer amountOfVotes,
			@RequestParam("amountOfLikes")Integer amountOfLikes,
			@RequestParam("amountOfDislikes")Integer amountOfDislikes) {
		Map<String,Object> ret = new HashMap();
		Vote t = new Vote();
		 	t.setSegment(segment);
		 	t.setLanguage(language);
		 	t.setAmountOfVotes(amountOfVotes);
			t.setAmountOfLikes(amountOfLikes);
			t.setAmountOfDislikes(amountOfDislikes);
		 	voteDao.save(t);	
		    
		ret.put("code", 200);
		ret.put("oper","vote");
		
		return ret;
	}
	@PostMapping(value="queryByLetter")
	public Object queryByLetter(@RequestParam("englishPhrase")String englishPhrase) {
		Map<String,Object> ret = new HashMap();
		
		List<Translation> res = translationReadWrapper.queryByLetter(englishPhrase);
		if(res != null) {
			ret.put("data", res);
		}
		ret.put("code", 200);
		ret.put("oper","queryByLetter");
		return ret;
	}
}
