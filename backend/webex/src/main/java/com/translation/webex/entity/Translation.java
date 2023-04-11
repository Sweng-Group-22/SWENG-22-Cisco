package com.translation.webex.entity;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "translation")
public class Translation {
	@Id
    private ObjectId id;

    private String segment;
    private int duplicateID;
    private String englishPhrase;
    
    @Transient
    List<Vote> voteList;
   
    public List<Vote> getVoteList() {
		return voteList;
	}

	public void setVoteList(List<Vote> voteList) {
		this.voteList = voteList;
	}

	public static boolean isDuplicateTranslation(String englishPhrase, String translation) {
    //Query the database to find if this phrase/translation pair exists already
        return true;
    }
    public ObjectId getId() {
        return id;
    }
    public void setID(ObjectId id) { this.id = id; };
    public String getSegment() {
		return segment;
	}

	public void setSegment(String segment) {
		this.segment = segment;
	}

	public int getDuplicateID() {
        return duplicateID;
    }

    public void setDuplicateID(int duplicateID) {
        this.duplicateID = duplicateID;
    }
  
    public String getEnglishPhrase() {
        return englishPhrase;
    }

    public void setEnglishPhrase(String englishPhrase) {
        this.englishPhrase = englishPhrase;
    }
		
}
