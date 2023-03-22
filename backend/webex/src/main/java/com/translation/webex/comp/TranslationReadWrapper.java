package com.translation.webex.comp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.translation.webex.entity.Translation;

@Component
public class TranslationReadWrapper {

	private static final String COLLECTION_NAME = "translation";
	
	@Autowired
    private MongoTemplate mongoTemplate;
	
	
	public Translation queryByEnglish(String english) {
		String value = ".?"+english+".?";
        Query query = new Query(Criteria.where("englishPhrase").regex(value,"i"));
        Translation result = mongoTemplate.findOne(query, Translation.class, COLLECTION_NAME);

        return result;
    }
	
	public List<Translation> queryByLetter(String letter) {
		String value = "^"+letter+".*";
		Query query = new Query(Criteria.where("englishPhrase").regex(value,"i"));
        List<Translation> result = mongoTemplate.find(query, Translation.class, COLLECTION_NAME);

        return result;
	}
}
