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
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.TreeMap;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import com.translation.webex.comp.TranslationReadWrapper;
import com.translation.webex.dao.TranslationDao;
import com.translation.webex.dao.VoteDao;
import com.translation.webex.entity.Translation;
import com.translation.webex.entity.Vote;
import com.translation.webex.entity.NewTranslation;
import com.translation.webex.utils.CSVUtils;

import jakarta.servlet.http.HttpServletResponse;

@org.springframework.web.bind.annotation.RestController
@CrossOrigin(origins = "*")
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
	@PostMapping(value="translates")
	public Object translates(@RequestBody NewTranslation n) {
		Map<String,Object> ret = new HashMap();
		Vote t = new Vote();
		 	t.setSegment(n.getSegment());
		 	t.setLanguage(n.getLanguage());
		 	t.setTranslation(n.getTranslation());
		 	voteDao.save(t);
		ret.put("code", 200);
		ret.put("oper","vote");
		
		return ret;
	}
	
	@GetMapping(value="translations")
        public Object translates(@RequestParam("language") String language) {
        Map<String,Object> ret = new HashMap();
        List<Translation> translationList = translationDao.findAll();
        List<Vote> voteList = voteDao.findAllByLanguage(language);
        Map<Integer,Translation> map = new TreeMap();
        if(translationList != null && !translationList.isEmpty()) {
            for(Translation t:translationList) {
                t.setVoteList(new ArrayList());
                map.put(t.getSegment(), t);
            }
            for(Vote v:voteList) {
                Translation t = map.get(v.getSegment());
                t.getVoteList().add(v);
            }
            ret.put("data", map);
        }
        ret.put("code", 200);
        ret.put("oper","alldata");
        return ret;
        }
	
	@PostMapping(value="translations/like")
	public Object like(@RequestParam("id") String id, @RequestParam(value = "dec", required = false, defaultValue = "false") boolean decrement) {
	    Map<String,Object> ret = new HashMap();
	    ObjectId objId = new ObjectId(id);
	    Optional<Vote> t = voteDao.findById(objId);
	    if(t.isEmpty()) {
	        ret.put("code", 501);
	        ret.put("oper","comment");
	        return ret;
	    }
	    Vote v = t.get();
	    int cnt = v.getLikes();
	    if(decrement) {
	        cnt--;
	        if(cnt < 0) {
	            cnt = 0;
	        }
	    } else {
	        cnt++;
	    }
	    v.setLikes(cnt);
	    voteDao.save(v);
	    ret.put("code", 200);
	    ret.put("oper","like");
	    return ret;
	}

	@PostMapping(value="translations/dislike")
	public Object dislike(@RequestParam("id") String id, @RequestParam(value = "dec", required = false, defaultValue = "false") boolean decrement) {
	    Map<String,Object> ret = new HashMap();
	    ObjectId objId = new ObjectId(id);
	    Optional<Vote> t = voteDao.findById(objId);
	    if(t.isEmpty()) {
	        ret.put("code", 501);
	        ret.put("oper","comment");
	        return ret;
	    }
	    Vote v = t.get();
	    int cnt = v.getDislikes();
	    if(decrement) {
	        cnt--;
	        if(cnt < 0) {
	            cnt = 0;
	        }
	    } else {
	        cnt++;
	    }
	    v.setDislikes(cnt);
	    voteDao.save(v);
	    ret.put("code", 200);
	    ret.put("oper","dislike");
	    return ret;
	}
	
	@PostMapping(value="translations/search")
	public Object search(@RequestParam("englishPhrase")String englishPhrase) {
		Map<String,Object> ret = new HashMap();
		List<Translation> res = translationReadWrapper.queryByLetter(englishPhrase);
		Map<Integer,Translation> map = new TreeMap();
		if(res != null && !res.isEmpty()) {
			List<Integer> ids = new ArrayList();
			for(Translation t:res) {
				t.setVoteList(new ArrayList());
				map.put(t.getSegment(), t);
				ids.add(t.getSegment());
			}
			List<Vote> voteList = voteDao.findBySegmentIn(ids);
			if(voteList != null && !voteList.isEmpty()) {
				for(Vote v:voteList) {
					map.get(v.getSegment()).getVoteList().add(v);
				}
			}
			
			ret.put("data", map.values());
		}
		ret.put("code", 200);
		ret.put("oper","search");
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
	@PostMapping(value="translations/add")
	public Object add(@RequestParam("duplicateID")Integer duplicateID,
	        @RequestParam("englishPhrase")String englishPhrase) {
	    Map<String,Object> ret = new HashMap();
	    Translation t = translationDao.findByEnglishPhrase(englishPhrase);
	    if(t != null) {
	    	ret.put("code", 501);
		    ret.put("oper","add");
		    ret.put("msg", "Sorry, the english phrase has already existed!");
		    return ret;
	    }
	    t = new Translation();
        t.setEnglishPhrase(englishPhrase);
	    t.setDuplicateID(duplicateID);
	    translationDao.save(t);    
	    ret.put("code", 200);
	    ret.put("oper","add");
	    return ret;
	}
	
	
	@PostMapping(value="translations")
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
			buf.append(t.getEnglishPhrase()).append(CSV_COLUMN_SEPARATOR);
//			buf.append(t.getTranslations().get(0)).append(CSV_RN);
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
				if(data[1] == null || data[1].trim().length() == 0)continue;
				if(data[3] == null || data[3].trim().length() == 0)continue;
				
				Translation t = new Translation();
							t.setEnglishPhrase(data[3]+"");
						    t.setSegment(Integer.valueOf(data[0]));
				
				if(data.length>7 &&data[7] != null && data[7].trim().length() > 0) {
					try {
					t.setDuplicateID(Integer.valueOf(data[7]));
					}catch(Exception ex) {}
				}		    
				translationDao.save(t);
				//ret.put("id", t.getSegment().toString());
				int seg = t.getSegment();
				if(data[4] != null && data[4].trim().length() >0) {
					Vote v= new Vote();
					v.setTranslation(data[4].trim());
					v.setSegment(seg);
					v.setLanguage("Irish");
					try {
						v.setAccuracy(Integer.valueOf(data[1].trim()));
					}catch(Exception ex) {}
					voteDao.save(v);
				}
				//return ret;
//					t.setAccuracy(Integer.valueOf(data[1]));
						    //t.setEnglishPhrase(data[3]);
//						    t.setTranslations(Arrays.asList(data[4]));
						    //translationDao.save(t);		
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
