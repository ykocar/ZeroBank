package com.zerobank.step_definitions;

import com.zerobank.pages.AccountActivityPage;
import com.zerobank.pages.AccountSummaryPage;
import com.zerobank.pages.OnlineBankingPage;
import com.zerobank.utilities.BrowserUtils;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;

public class AccountActivityStepDefs {

    @When("the user clicks on	{string} on	the	Account	Summary	page")
    public void the_user_clicks_on_on_the_Account_Summary_page(String link) {
        new AccountSummaryPage().navigateToLink(link,"Savings2");
    }

    @And("The user navigate to {string} page")
    public void theUserNavigate(String menuName) {

        new OnlineBankingPage().navigate(menuName);
        new AccountSummaryPage().getTitle();
        new AccountSummaryPage().accountTypes();
        new AccountSummaryPage().getAllHeaders();
    }

    @Then("the {string} page should	be displayed")
    public void the_page_should_be_displayed(String tab) {
        new AccountSummaryPage().navigateToTab(tab);
        new AccountActivityPage().getTitle();
        new AccountActivityPage().getAllHeaders();
        new AccountActivityPage().accountTypes();



    }

    @And("Account	drop down should have {string} selected")
    public void accountDropDownShouldHaveSelected(String eachDropdown) {

        new AccountSummaryPage().dropDown(eachDropdown);
    }








}
