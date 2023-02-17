package com.translation.webex.Votes;

public class Vote {
    private String language;
    private int segment;
    private int duplicateID;
    private int amountOfVotes;
    private boolean reachedThreshold;
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
}
