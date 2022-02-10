package com.zerobank.step_definitions;

import com.zerobank.pages.*;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Alert;

import java.util.List;
import java.util.Map;

public class PayBillsStepsDefs {

    @Given("Go to {string} module")
    public void goToModule(String module) {

        new PayBillsPage().payBillsBtn.click();
    }

    @And("Add New Payee tab")
    public void addNewPayeeTab() {
        new PayBillsPage().addNewPayeeBtn.click();
        BrowserUtils.waitFor(3);
    }

    @And("creates new payee using following information")
    public void createsNewPayeeUsingFollowingInformation(Map<String, String> payeeInfo) {

        new PayBillsPage().payeeInfo(payeeInfo.get("Payee Name"), payeeInfo.get("Payee Address"),
                payeeInfo.get("Account"), payeeInfo.get("Payee details"));
        BrowserUtils.waitFor(2);

    }

    @Then("user click the add button")
    public void userClickTheAddButton() {

        new PayBillsPage().addBttn.click();
        BrowserUtils.waitFor(2);
    }

    @Then("message {string} should be displayed")
    public void messageShouldBeDisplayed(String message) {
        BrowserUtils.waitFor(2);

        Assert.assertTrue(new PayBillsPage().message.isDisplayed());

        String messageText = new PayBillsPage().message.getText();

        System.out.println("messageText = " + messageText);

    }

    @And("the user accesses the Purchase Foreign Currency tab")
    public void theUserAccessesThePurchaseForeignCurrencyTab() {
        new PayBillsPage().purcForCurrencyBtn.click();
        BrowserUtils.waitFor(2);

    }

    @Then("following currencies should be available")
    public void followingCurrenciesShouldBeAvailable(List<String> options) {

        new PayBillsPage().currencyTypes();
    }

    @When("user tries to calculate cost without selecting a currency")
    public void userTriesToCalculateCostWithoutSelectingACurrency() {

        new PayBillsPage().amountCheckBox.sendKeys("1");

        new PayBillsPage().selectOneOption.isEnabled();

        new PayBillsPage().selectedCurrencyBttn.isSelected();

        new PayBillsPage().calcCostsBttn.click();

    }

    @Then("error message should be displayed")
    public void errorMessageShouldBeDisplayed() {

        Alert alert = Driver.get().switchTo().alert();

        String expectedMessage = "Please, ensure that you have filled all the required fields with valid values.";
        String actualMessage = alert.getText();

        System.out.println("actualMessage = " + actualMessage);
        Assert.assertEquals(expectedMessage, actualMessage);
    }

    @When("user tries to calculate cost without entering a value")
    public void userTriesToCalculateCostWithoutEnteringAValue() {

        new PayBillsPage().currencyTypes();

        new PayBillsPage().calcCostsBttn.click();


    }
}
