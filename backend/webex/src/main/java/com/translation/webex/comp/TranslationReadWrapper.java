package com.translation.webex.comp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;
import java.util.ArrayList;

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
    //Honestly doubtful this works at all since I don't really know how databases work
    //Is meant to return an array of english phrases starting with the case-insensitive "letter" parameter
    public Translation[] queryByLetter(char letter)
    {
        Query query = new Query(Criteria.where("englishPhrase").regex("/\b" + letter + "[A-z]*/g"));
        Translation[] test = mongoTemplate.find(query, Translation.class, COLLECTION_NAME).toArray(new Translation[0]);
        return test;
    }
}
