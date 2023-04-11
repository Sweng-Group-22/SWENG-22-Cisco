package com.translation.webex.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "vote")
public class Vote {
    
    public int getSegment() {
		return segment;
	}

	@Id
    private ObjectId id;
    private int segment;
    private String language;
    private String translation;
    private int accuracy;
    private int likes;
    private int dislikes;
    
    public Vote() {
    	
    }
    
    public Vote(String language){
        this.language = language;
    }
    
    public String getTranslation() {
		return translation;
	}
	public void setTranslation(String translation) {
		this.translation = translation;
	}
	public void setSegment(int segment) {
		this.segment = segment;
	}

    public ObjectId getId() {
		return id;
	}
	public void setId(ObjectId id) {
		this.id = id;
	}
	public int getAccuracy() {
		return accuracy;
	}
	public void setAccuracy(int accuracy) {
		this.accuracy = accuracy;
	}
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}
	public int getDislikes() {
		return dislikes;
	}
	public void setDislikes(int dislikes) {
		this.dislikes = dislikes;
	}
	public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

}
