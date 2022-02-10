package com.zerobank.step_definitions;

import com.zerobank.pages.AccountActivityPage;
import com.zerobank.pages.AccountSummaryPage;
import com.zerobank.pages.LoginPage;
import com.zerobank.pages.OnlineBankingPage;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class FindTransactionsStepDefs {

    @Given("the user accesses the Find Transactions tab")
    public void the_user_accesses_the_Find_Transactions_tab() {
        new LoginPage().login();
        new OnlineBankingPage().onlineBankBtn.click();
        new AccountSummaryPage().accountSummaryBtn.click();
        new AccountSummaryPage().accountActivityBtn.click();
        new AccountActivityPage().findTransactionsButtn.click();
        BrowserUtils.waitFor(2);


    }

    @When("the user enters date range from {string} to {string}")
    public void the_user_enters_date_range_from_to(String startDate, String endDate) {
        new AccountActivityPage().fromDate.sendKeys(startDate);
        new AccountActivityPage().toDate.sendKeys(endDate);
        BrowserUtils.waitFor(3);

    }

    @And("clicks search")
    public void clicks_search() {
        new AccountActivityPage().findBttn.click();
        BrowserUtils.waitFor(2);
        new AccountActivityPage().fromDate.clear();
        new AccountActivityPage().toDate.clear();

    }

    @Then("results table should only show transactions dates between {string} to {string}")
    public void results_table_should_only_show_transactions_dates_between_to(String fromDate, String toDate) {

        //SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Assert.assertTrue("Verify that results table shows transactions dates between " + fromDate + "to" + toDate,
                new AccountActivityPage().betweenDate(fromDate, toDate));


    }

    @Then("the results should be sorted by most recent date")
    public void the_results_should_be_sorted_by_most_recent_date() {

        Assert.assertTrue("Verify that results should be sorted by most recent date",
                new AccountActivityPage().mostRecentSorted());

    }

    @Then("the results table should only not contain transactions dated {string}")
    public void the_results_table_should_only_not_contain_transactions_dated(String date) {

        Assert.assertFalse("the results table should only not contain transactions dated" + date,
                BrowserUtils.getElementsText(new AccountActivityPage().tableDate).contains(date));
    }

    @When("the user enters description {string}")
    public void theUserEntersDescription(String str) {

        new AccountActivityPage().descriptionBox.sendKeys(str);
    }

    @And("clicks find button")
    public void clicksFindButton() {
        new AccountActivityPage().findBttn.click();
        BrowserUtils.waitFor(1);
        new AccountActivityPage().descriptionBox.clear();

    }

    @Then("results table should only show descriptions containing {string}")
    public void resultsTableShouldOnlyShowDescriptionsContaining(String expectedText) {

        for (WebElement actualText : new AccountActivityPage().tableDescription) {
            String actualText1 = actualText.getText();
            Assert.assertTrue(actualText1.contains(expectedText));
            new AccountActivityPage().descriptionBox.clear();


        }
    }

    @But("results table should not show descriptions containing {string}")
    public void resultsTableShouldNotShowDescriptionsContaining(String str) {

        if (new AccountActivityPage().tableDescription.size() != 0) {
            for (WebElement actualText : new AccountActivityPage().tableDescription) {

                String actualText1 = actualText.getText();

                Assert.assertFalse(actualText1.equals(str));

            }
        } else {

            Assert.assertTrue(new AccountActivityPage().noResult.isDisplayed());

        }

    }

    @Then("results table should show at least one result under {string}")
    public void resultsTableShouldShowAtLeastOneResultUnder(String column) {

        switch (column) {

            case "Deposit":

                for (WebElement depositEachData : new AccountActivityPage().depositData) {

                    System.out.println("depositEachData.getText() = " + depositEachData.getText());

                    Assert.assertTrue(depositEachData.isDisplayed());

                    break;
                }

            case "Withdrawal":
                for (WebElement withdrawalEachData : new AccountActivityPage().withdrawalData) {

                    System.out.println("withdrawalEachData.getText() = " + withdrawalEachData.getText());

                    Assert.assertTrue(withdrawalEachData.isDisplayed());

                    break;

                }
        }
    }

    @When("user selects type {string}")
    public void userSelectsType(String type) {

        new AccountActivityPage().type(type);

    }

    @But("results table should show no result under {string}")
    public void resultsTableShouldShowNoResultUnder(String type) {

        BrowserUtils.waitFor(2);
        switch (type) {

            case "Withdrawal":

                for (WebElement withdrawalEachData : new AccountActivityPage().withdrawalData) {

                    String withdrawalText = withdrawalEachData.getText();

                    System.out.println("withdrawalText = " + withdrawalText);

                    Assert.assertTrue(withdrawalText.isEmpty());


                }
                break;

            case "Deposit":

                for (WebElement depositEachData : new AccountActivityPage().depositData) {

                    String depositText = depositEachData.getText();

                    System.out.println("depositText = " + depositText);

                    Assert.assertTrue(depositText.isEmpty());



                }
                break;
        }

    }
}


