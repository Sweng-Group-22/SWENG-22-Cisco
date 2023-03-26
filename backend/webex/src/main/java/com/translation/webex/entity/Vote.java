package com.translation.webex.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "vote")
public class Vote {
    private String language;
    private int segment;
    @Id
    private ObjectId id;
    
    private int duplicateID;
    private int amountOfVotes;
    private int amountOfLikes;
    private int amountOfDislikes;
    private boolean reachedThreshold;
    
    public Vote() {
    	
    }
    public Vote(String language, int amountOfVotes){
        this.language = language;
        this.amountOfVotes = amountOfVotes;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public int getSegment() {
        return segment;
    }

    public void setSegment(int segment) {
        this.segment = segment;
    }

    public int getDuplicateID() {
        return duplicateID;
    }

    public void setDuplicateID(int duplicateID) {
        this.duplicateID = duplicateID;
    }

    public int getAmountOfVotes() {
        return amountOfVotes;
    }

    public void setAmountOfVotes(int amountOfVotes) {
        this.amountOfVotes = amountOfVotes;
    }

    public int getAmountOfLikes() {
        return amountOfLikes;
    }

    public void setAmountOfLikes(int amountOfLikes){
        this.amountOfLikes = amountOfLikes;
    }

    public int getAmountOfDislikes() {
        return amountOfDislikes;
    }

    public void setAmountOfDislikes(int amountOfDislikes){
        this.amountOfDislikes = amountOfDislikes;
    }
}
