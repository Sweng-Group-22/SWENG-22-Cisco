package com.translation.webex;

import com.translation.webex.controller.RestController;
import com.translation.webex.entity.*;
import org.bson.types.ObjectId;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;


import java.util.ArrayList;

import static org.mockito.Mockito.verify;

@SpringBootTest
class Sweng22CiscoApplicationTests {
	@Autowired
	private MongoTemplate mongoTemplate;
	@Mock
	private Translation testTranslation;
	private Vote testVote;
	private AutoCloseable autoCloseable;
	public RestController restController;
	@BeforeEach
	void setUp() {
		//Initialise mock data for testing
		autoCloseable = MockitoAnnotations.openMocks(this);
		restController = new RestController();
		testVote = new Vote();
		testTranslation = new Translation();
		testVote.setAccuracy(91);
		testVote.setLanguage("Irish");
		testVote.setTranslation("Nuashonrú Réitithe");
		testVote.setSegment(18);
		testVote.setId(new ObjectId());
		testVote.setLikes(500);
		testVote.setDislikes(8);

		testTranslation.setID(new ObjectId());
		testTranslation.setSegment(18);
		testTranslation.setEnglishPhrase("Update ready");
		testTranslation.setDuplicateID(143784);
		ArrayList<Vote> voteList = new ArrayList<>();
		voteList.add(testVote);
		testTranslation.setVoteList(voteList);

	}
	@AfterEach
	void tearDown() throws Exception{
		autoCloseable.close();

	}
	@Test
	@Disabled
	void canDislikeTranslation() {
		//Currently unused
		int initialDislikes = testTranslation.getVoteList().get(0).getDislikes();

		//Uses the id of the first vote in the testTranslation's voteList
		restController.dislike(testTranslation.getVoteList().get(0).getId().toString());
		verify(restController).dislike(testTranslation.getVoteList().get(0).getId().toString());

	}

	@Test
	@Disabled
	void canViewTranslations() {
	}

	@Test
	@Disabled
	void contextLoads() {
	}

	@Test
	@Disabled
	void canViewAllTranslations{		
	}

	@Test 
	@Disabled
	void canAddNewTranlations{
		
	}


}
