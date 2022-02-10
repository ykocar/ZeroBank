package com.zerobank.step_definitions;

import com.zerobank.pages.LoginPage;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginStepDefs {


    @Given("the user is logged in")
    public void the_user_is_logged_in() {
        new LoginPage().login();
    }

    //using invalid or blank username or password- dynamic way
    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {
       Driver.get().get(ConfigurationReader.get("url"));
    }

    //using invalid or blank username or password- dynamic way
    @When("the user logs in using {string} or {string}")
    public void the_user_logs_in_using_or(String username, String password) {

        new LoginPage().login1(username,password);
    }

    //verify the error message is displayed
    @Then("the user should not be able to login")
    public void the_user_should_not_be_able_to_login() {
        Assert.assertTrue(new LoginPage().errorMessage.isDisplayed());

    }

}