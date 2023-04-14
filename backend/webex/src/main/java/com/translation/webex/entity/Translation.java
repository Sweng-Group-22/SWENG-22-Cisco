package com.translation.webex.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "translation")
public class Translation {
	@Id
    private int segment;
    private int duplicateID;
    private int accuracy;
    private String englishPhrase;
    private String translation;
    private String language = "Irish"; //We're currently only concerned with Irish
    public Translation() {
    }
    public static boolean isDuplicateTranslation(String englishPhrase, String translation) {
    //Query the database to find if this phrase/translation pair exists already
        return true;
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

    public int getAccuracy() {
        return accuracy;
    }

    public void setAccuracy(int accuracy) {
        this.accuracy = accuracy;
    }

    public String getEnglishPhrase() {
        return englishPhrase;
    }

    public void setEnglishPhrase(String englishPhrase) {
        this.englishPhrase = englishPhrase;
    }

    public String getTranslation() {
        return translation;
    }

    public void setTranslation(String translation) {
        this.translation = translation;
    }
    public void setLanguage(String language) {
        this.language = language;
    }
    public String getLanguage() {
        return language;
    }
}
